const pool = require("../../db.config");

const OwnMemberregisterService=(amount,userId,callback)=>{
	const sql=`INSERT INTO umumaebedmembers(user_id,amount) values(?,?)`
	pool.query(sql,[userId,amount],(err,results)=>{
		
		if(err){
			return callback(err)
		}
		return callback(null,results)
	})
}

const registerMemberService = (data, callback) => {
	const sql =
		"INSERT INTO umumaebed (name,lastname,id_number,phone,batch,monthlypayment) VALUES (?,?,?,?,?,?)";
	pool.query(
		sql,
		[
			data.name,
			data.lastname,
			data.idnumber,
			data.phone,
			data.batch,
			data.monthlyPayment,
		],
		(err, results) => {
			if (err) {
				return callback(err);
			}
			return callback(null, results);
		},
	);
};

module.exports = { registerMemberService,OwnMemberregisterService};
