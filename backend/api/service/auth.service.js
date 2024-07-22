const pool = require("../../db.config");
const bcrypt = require("bcrypt");
const createaccountservice = (data, callback) => {
	// console.log("services");
	// console.log(data);
	// console.log(data.body.password);
	const saltRounds = 10;

	const salt = bcrypt.genSaltSync(saltRounds);

	const hashedpassword = bcrypt.hashSync(data.password, salt);
	const sql =
		"INSERT INTO usertable (name,lastname,id_number,role,password,phone,emergency_phone) VALUES (?,?,?,?,?,?,?)";
	pool.query(
		sql,
		[
			data.name,
			data.lastname,
			data.id_number,
			data.role,
			hashedpassword,
			data.phone,
			data.emergency_phone,
		],
		(err, results) => {
			if (err) {
				return callback(err);
			}
			return callback(null, results);
		},
	);
};

const getuserbyid = (id, callback) => {
	const sql = `SELECT * FROM usertable WHERE id_number=?`;
	pool.query(sql, [id], (err, results) => {
		if (err) {
			return callback(err);
		}
		return callback(null, results);
	});
};

const getbyid = (id) => {
	return new Promise((resolve, reject) => {
		const sql = "SELECT * FROM usertable where id_number =? ";
		pool.query(sql, [id], (err, results) => {
			if (err) {
				return reject(err);
			}
			resolve(results);
		});
	});
};

module.exports = { createaccountservice, getuserbyid, getbyid };
