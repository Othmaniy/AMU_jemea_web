const express = require("express");
const pool = require("../../db.config");
const {
	createaccountservice,
	getuserbyid,
} = require("../service/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createaccount = (req, res, next) => {
	console.log("controller");
	// console.log("req");
	// console.log(req);
	// console.log("req.body");
	// console.log(req.body);

	console.log("correct one");
	console.log(req.headers["x-access-token"]);
	// console.log(req);
	console.log("req body");
	console.log(req.body);
;

	const sql = "SELECT * FROM usertable WHERE id_number=?";
	const idnumber = req.body.id_number;
	pool.query(sql, [idnumber], (err, results) => {
		if (err) {
			console.log(err);
			return res.status(500).json({ message: "database connection error" });
		}
		if (results.length > 0) {
			return res.status(409).json({ message: "user already exists" });
		}
		createaccountservice(req.body, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({ message: "database connecton error" });
			}
			const response = {
				status: "success",
				message: "user created successfully",
			};
			return res.status(200).json(response);
		});
	});
};
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
module.exports = { createaccount, login };
