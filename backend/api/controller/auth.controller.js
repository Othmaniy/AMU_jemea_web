const express = require("express");
const pool = require("../../db.config");
const {
	createaccountservice,
	getuserbyid,
	createTempAccountService,
} = require("../service/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createTempAccount=(req,res)=>{
	const id_number = req.body.id_number;
	const sql =`SELECT * FROM tempaccounts WHERE id_number = ?`
	pool.query(sql,[id_number],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"database errror"
			})
		}
		if(results.length>0){
			return res
			.status(409)
			.json({
				message:"user with this id number already exists"
			})
		}
		createTempAccountService(req.body,(err,results)=>{
			if(err){
				return res
				.status(500)
				.json({
					error:err,
					message:"error in the database"
				})
			}
			return res
			.status(200)
			.json({
				message:"you have sucessfully registered as temporary user"
			})
		})
	})
}

const getTempAccounts=(req,res)=>{
	const sql =`SELECT * FROM tempaccounts`
	pool.query(sql,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error in fetching temporary users"
			})
		}
		return res
		.status(200)
		.json({data:results})
	})
} 
const createaccount = (req, res, next) => {
	console.log("controller");
	console.log("correct one");
	console.log(req.headers["x-access-token"]);
	// console.log(req);
	console.log("req body");
	console.log(req.body);
;

	const sql = "SELECT * FROM user WHERE id_number=?";
	const idnumber = req.body.id_number;
	pool.query(sql, [idnumber], (err, results) => {
		if (err) {
			return res.status(500).json({ message: "error in the database" });
		}
		if (results.length > 0) {
			return res.status(409).json({ message: "accounts with this id_number already exists" });
		}
		createaccountservice(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ message: "database connecton error" });
			}
			const response = {
				status: "success",
				message: "user sucessfully registered",
			};
			return res.status(200).json(response);
		});
	});
};

const getUsers = (req, res) => {
    // Query to count total users
    const countQuery = "SELECT COUNT(*) AS total FROM user";
    let totalCount = 0;

    // Execute the count query
    pool.query(countQuery, (err, countResults) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error in counting users" });
        }
        
        totalCount = countResults[0].total;

        const { page = 1, limit = 10, batch, department, id_number } = req.query;

        // SQL query to select users with pagination and optional filters
        let sql = `
            SELECT u.*, i.* 
            FROM user AS u 
            LEFT JOIN userinfo AS i ON (u.id = i.userid)
        `;

        let conditions = [];

        if (batch) {
            conditions.push(`i.batch = ${pool.escape(batch)}`);
        }
        if (department) {
            conditions.push(`i.department = ${pool.escape(department)}`);
        }
        if (id_number) {
            conditions.push(`u.id_number = ${pool.escape(id_number)}`);
        }

        if (conditions.length > 0) {
            sql += ` WHERE ` + conditions.join(' AND ');
        }

        sql += ` LIMIT ${(page - 1) * limit}, ${limit}`;

        // Execute the main query
        pool.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err,
                    message: "Error in the database in selecting users"
                });
            }

            return res.status(200).json({
                data: results,
                totalCount: totalCount,
				slength:results.length
				
            });
        });
    });
};



const assignRole=(req,res)=>{
	console.log("assign role request");
	console.log(req.body);
	const userid = parseInt(req.params.id);
	const sql ='UPDATE user SET role = ? WHERE id=? '
	const role =req.body.role
	pool.query(sql,[role,userid],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error in the database  in assigning role"
			})
		}
		return res
		.status(200)
		.json({
			message:"role sucessfully assigned"
		})
	})
}
const login = (req, res) => {
	getuserbyid(req.body.id_number, (err, results) => {
		if (err) {
			return res.status(500).json({ message: "db connection error" });
		}
		if (results.length == 0) {
			return res.status(404).json({ message: "no user found with this id" });
		}
		console.log(results[0]);
		const result = results[0];
		const checkpassword = bcrypt.compareSync(
			req.body.password,
			results[0].password,
		);
		if (!checkpassword) {
			return res.status(400).json({ message: "invalid credentials" });
		}
		const payload = {
			id: result.id,
			name: result.name,
			lastname: result.lastname,
			id_number: result.id_number,
			role: result.role,
		};

		console.log(result);
		console.log(process.env.SECRET_KEY);

		const token = jwt.sign(payload, process.env.SECRET_KEY, {
			expiresIn: "24hr",
		});
		const decodedToken = jwt.decode(token);
		console.log("Token Expiration Time: ", new Date(decodedToken.exp * 1000));
		res.status(200).json({ message: "login successfully ", token: token });
	});
};
module.exports = { createaccount, login ,createTempAccount,getTempAccounts,getUsers,assignRole};
