const pool = require("../../db.config");
const bcrypt = require("bcrypt");


const createTempAccountService=(data,callback)=>{
	const saltRounds= 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hashedPassword=bcrypt.hashSync(data.password,salt);
	const sql =`INSERT INTO tempaccounts (name,lastname,id_number,password,password_init,batch,department,block_number,dorm_number,phone,emergency_phone) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
	pool.query(sql,[data.name,data.lastname,data.id_number,hashedPassword,data.password,data.batch,data.department,data.blockNumber,data.dormNumber,data.phone,data.emergencyPhone],(err,results)=>{
		if(err){
			return callback(err)
		}
		return callback(null,results)
	})
}
const createaccountservice = (data, callback) => {
	// console.log("services");
	// console.log(data);
	// console.log(data.body.password);
	// const saltRounds = 10;

	// const salt = bcrypt.genSaltSync(saltRounds);

	// const hashedpassword = bcrypt.hashSync(data.password, salt);
	const sql1 =
		"INSERT INTO user (name,lastname,id_number,password) VALUES (?,?,?,?)";
	pool.query(
		sql1,
		[
			data.name,
			data.lastname,
			data.id_number,
	        data.password,
		],
		(err,results)=>{
           if(err){
			console.log(err);
		   }
		   const userid =results.insertId;
	const sql2 =`INSERT INTO userinfo(userid,batch,department,block_number,dorm_number,phone,emergency_phone) VALUES(?,?,?,?,?,?,?)`
		pool.query(sql2,[userid,data.batch,data.department,data.blockNumber,data.dormNumber,data.phone,data.emergencyPhone],(err,results)=>{
			if(err){
				return callback(err)
			}
			return callback(null,results)
		})
		}

		
		
	
	);
//check if result is returned 

	
};

const getuserbyid = (id, callback) => {
	const sql = `SELECT * FROM user WHERE id_number=?`;
	pool.query(sql, [id], (err, results) => {
		if (err) {
			return callback(err);
		}
		return callback(null, results);
	});
};

const getbyid = (id) => {
	return new Promise((resolve, reject) => {
		const sql = "SELECT * FROM user where id_number =? ";
		pool.query(sql, [id], (err, results) => {
			if (err) {
				return reject(err);
			}
			resolve(results);
		});
	});
};

module.exports = { createaccountservice, getuserbyid, getbyid ,createTempAccountService};




