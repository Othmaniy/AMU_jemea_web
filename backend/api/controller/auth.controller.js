const express = require("express");
const pool = require("../../db.config");
const {
	createaccountservice,
	getuserbyid,
	createTempAccountService,
	getuserbyPhoneNumber,
} = require("../service/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createTempAccount=(req,res)=>{
	const phoneNumber = req.body.phoneNumber;
	const sql =`SELECT * FROM tempaccounts WHERE phone_number = ?`
	pool.query(sql,[phoneNumber],(err,results)=>{
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
				message:"user with this phone number already exists"
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
const changeApproveStatus=(req,res)=>{
const sql =`UPDATE tempaccounts set is_approved=true where temp_account_id=?`
const id = parseInt(req.params.id)
pool.query(sql,[id],(err,results)=>{
	if(err){
		return res
		.status(500)
		.json({
			error:err,
			message:"error in the dataase"
		})
	}
	return res
	.status(200)
	.json({
		message:"status sucessfully changed"
	})
})
}
const getTempAccounts=(req,res)=>{
	const countTempAccounts=`SELECT COUNT(*) AS total FROM tempaccounts`
	let count=0
	pool.query(countTempAccounts,(err,countResults)=>{
		if(err){
			console.log(err);
			return res
			.status(500)
			.json({message:"error in counting total temp accounts"})
		}
		count=countResults[0].total;
		const {page=1,limit=10,name,batch,department,phoneNumber}=req.query

		//searching from the tempaccunts table
		let  sql =`SELECT * FROM tempaccounts WHERE is_approved=false`
		let conditions=[];
		if(name){
			conditions.push(`name=${pool.escape(name)}`)
		}
		if(department){
			conditions.push(`department=${pool.escape(department)}`)
		}
		if(batch){
			conditions.push(`batch=${pool.escape(batch)}`)
		}
		if(phoneNumber){
			conditions.push(`phone=${pool.escape(phoneNumber)}`)
		}
		if(conditions.length>0){
			sql+=" AND "+conditions.join(' AND ')
		}
		sql+=` LIMIT ${(page-1)*limit},${limit}`
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
			.json({
				data:results,
				totalCount:count

			})
		})
	})
	
} 
const deleteTempUser=(req,res)=>{
	const id =parseInt(req.params.id)
	console.log(id);
	const sql = `DELETE FROM tempaccounts WHERE temp_account_id = ?`
	pool.query(sql,[id],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				errror:err,
				message:"error in database"
			})
		}
		return res.status(200)
		.json({
			message:'user deleted successfully'
		})
	})
}
//creating permanent users
const createaccount = (req, res, next) => {
	console.log("controller");
	console.log("correct one");
	console.log(req.headers["x-access-token"]);
	const sql = "SELECT * FROM user WHERE phone_number=?";
	const phoneNumber = req.body.phoneNumber;
	pool.query(sql, [phoneNumber], (err, results) => {
		if (err) {
			return res.status(500).json({ message: "error in the database" });
		}
		if (results.length > 0) {
			return res.status(409).json({ message: "accounts with this phone number already exists" });
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
//with pagination
const getUsers = (req, res) => {
    const { page = 1, limit = 10, batch, department, phoneNumber } = req.query;
   const userType=req.query.userType;
   const isActive = userType=="users"?1:0;
    // SQL query to count total users with optional filters
    let countQuery = "SELECT COUNT(*) AS total FROM user AS u LEFT JOIN userinfo AS i ON (u.id = i.userid) WHERE u.is_active=?";
    let sql = `
        SELECT u.*, i.* 
        FROM user AS u 
        LEFT JOIN userinfo AS i ON (u.id = i.userid) WHERE u.is_active=?
    `;

    let conditions = [];
2
    if (batch) {
        conditions.push(`i.batch = ${pool.escape(batch)}`);
    }
    if (department) {
        conditions.push(`i.department = ${pool.escape(department)}`);
    }
    if (phoneNumber) {
        conditions.push(`u.phone_number = ${pool.escape(phoneNumber)}`);
    }

    if (conditions.length > 0) {
        const conditionStr = conditions.join(' AND ');
        countQuery += ` AND ${conditionStr}`;
        sql += ` AND ${conditionStr}`;
    }

    sql += ` LIMIT ${(page - 1) * limit}, ${parseInt(limit)}`;

    // Execute the count query
    pool.query(countQuery,[isActive], (err, countResults) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Error in counting users" });
        }
        
        const totalCount = countResults[0].total;

        // Execute the main query
        pool.query(sql,[isActive], (err, results) => {
            if (err) {
                return res.status(500).json({
                    error: err,
                    message: "Error in the database in selecting users"
                });
            }

            return res.status(200).json({
                data: results,
                totalCount: totalCount,
            });
        });
    });
};

//get alumnis

//get all users with out pagination
const getAllUsers=(req,res)=>{
	const sql = `SELECT * FROM user`
	pool.query(sql,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error in the database"})

		}
		return res
		.status(200)
		.json({data:results})

	})
}

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
	console.log("login controller");

	getuserbyPhoneNumber(req.body.phoneNumber, (err, results) => {
		if (err) {
			return res.status(500).json({ message: "db connection error" });
		}
		if (results.length == 0) {
			return res.status(404).json({ message: "no user found with this phone number" });
		}
		console.log("logged in user in auth controller");
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
			phoneNumber: result.phone_number,
			role: result.role,
			isActive:result.is_active
		};

		// console.log(result);
		console.log(process.env.SECRET_KEY);

		const token = jwt.sign(payload, process.env.SECRET_KEY, {
			expiresIn: "12hr",
		});
		const decodedToken = jwt.decode(token);
		console.log("Token Expiration Time: ", new Date(decodedToken.exp * 1000));
		res.status(200).json({ message: "login successfully ", token: token });
	});
};

		const updateUser = (req, res) => {
			const userId = parseInt(req.params.id);
			const personalFieldsToUpdate = [];
			const personalValues = [];
			const detailFieldsToUpdate = [];
			const detailValues = [];
		
			// Update personal details (users table)
			if (req.body.name) {
				personalFieldsToUpdate.push("name = ?");
				personalValues.push(req.body.name);
			}
			if (req.body.lastname) {
				personalFieldsToUpdate.push("lastname = ?");
				personalValues.push(req.body.lastname);
			}
			if (req.body.phoneNumber) {
				personalFieldsToUpdate.push("phone_number = ?");
				personalValues.push(req.body.phoneNumber);
			}
		
			// Update user details (userinfo table)
			if (req.body.batch) {
				detailFieldsToUpdate.push("batch = ?");
				detailValues.push(req.body.batch);
			}
			if (req.body.department) {
				detailFieldsToUpdate.push("department = ?");
				detailValues.push(req.body.department);
			}
			if (req.body.blockNumber) {
				detailFieldsToUpdate.push("block_number = ?");
				detailValues.push(req.body.blockNumber);
			}
			if (req.body.dormNumber) {
				detailFieldsToUpdate.push("dorm_number = ?");
				detailValues.push(req.body.dormNumber);
			}
		
			if (personalFieldsToUpdate.length === 0 && detailFieldsToUpdate.length === 0) {
				return res.status(400).json({ message: "No fields provided to update" });
			}
		
			// Start a transaction
			pool.getConnection((err, connection) => {
				if (err) {
					return res.status(500).json({ message: "Database connection error" });
				}
		
				connection.beginTransaction((err) => {
					if (err) {
						connection.release();
						return res.status(500).json({ message: "Transaction start error" });
					}
		
					const personalSql = `UPDATE user SET ${personalFieldsToUpdate.join(", ")} WHERE id = ?`;
					const detailSql = `UPDATE userinfo SET ${detailFieldsToUpdate.join(", ")} WHERE userid = ?`;
		
					const executePersonalUpdate = (callback) => {
						if (personalFieldsToUpdate.length > 0) {
							personalValues.push(userId);
							connection.query(personalSql, personalValues, callback);
						} else {
							callback(null, { affectedRows: 1 }); // Skip if no personal fields to update
						}
					};
		
					const executeDetailUpdate = (callback) => {
						if (detailFieldsToUpdate.length > 0) {
							detailValues.push(userId);
							connection.query(detailSql, detailValues, callback);
						} else {
							callback(null, { affectedRows: 1 }); // Skip if no detail fields to update
						}
					};
		
					// Execute the updates in sequence
					executePersonalUpdate((err, results) => {
						if (err) {
							return connection.rollback(() => {
								connection.release();
								return res.status(500).json({ message: "Error updating personal details" });
							});
						}
		
						executeDetailUpdate((err, results) => {
							if (err) {
								return connection.rollback(() => {
									connection.release();
									return res.status(500).json({ 
										error:err,
										message: "Error updating user details" });
								});
							}
		
							connection.commit((err) => {
								if (err) {
									return connection.rollback(() => {
										connection.release();
										return res.status(500).json({ message: "Transaction commit error" });
									});
								}
		
								connection.release();
								return res.status(200).json({ message: "User updated successfully" });
							});
						});
					});
				});
			});
		};
module.exports = { createaccount, login ,createTempAccount,getTempAccounts,getUsers,assignRole,getAllUsers,changeApproveStatus,updateUser,deleteTempUser};
