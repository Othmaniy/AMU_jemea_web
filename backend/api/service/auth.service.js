const pool = require("../../db.config");
const bcrypt = require("bcrypt");


const createTempAccountService=(data,callback)=>{
	const saltRounds= 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	const hashedPassword=bcrypt.hashSync(data.password,salt);
	const isActive =data.alumni==true?false:true
	const sql =`INSERT INTO tempaccounts (name,lastname,phone_number,password,password_init,batch,department,block_number,dorm_number,emergency_phone,is_active) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
	pool.query(sql,[data.name,data.lastname,data.phoneNumber,hashedPassword,data.password,data.batch,data.department,data.blockNumber,data.dormNumber,data.emergencyPhone,isActive],(err,results)=>{
		if(err){
			return callback(err)
		}
		return callback(null,results)
	})
}
const createaccountservice = (data, callback) => {
	const sql1 =
		"INSERT INTO user (name,lastname,phone_number,password,is_active) VALUES (?,?,?,?,?)";
	pool.query(
		sql1,
		[
			data.name,
			data.lastname,
			data.phoneNumber,
	        data.password,
			data.isActive
		],
		(err,results)=>{
           if(err){
			console.log(err);
		   }
		   const userid =results.insertId;
	const sql2 =`INSERT INTO userinfo(userid,batch,department,block_number,dorm_number,emergency_phone) VALUES(?,?,?,?,?,?)`
		pool.query(sql2,[userid,data.batch,data.department,data.blockNumber,data.dormNumber,data.emergencyPhone],(err,results)=>{
			if(err){
				return callback(err)
			}
			return callback(null,results)
		})
		}

		
		
	
	);
};

const getuserbyPhoneNumber = (phoneNumber, callback) => {
	const sql = `SELECT * FROM user WHERE phone_number=?`;
	pool.query(sql, [phoneNumber], (err, results) => {
		if (err) {
			return callback(err);
		}
		return callback(null, results);
	});
};

const getbyphone = (phone) => {
	return new Promise((resolve, reject) => {
		const sql = "SELECT * FROM user where phone_number =? ";
		pool.query(sql, [phone], (err, results) => {
			if (err) {
				return reject(err);
			}
			resolve(results);
		});
	});
};

module.exports = { createaccountservice, getuserbyPhoneNumber, getbyphone ,createTempAccountService};




