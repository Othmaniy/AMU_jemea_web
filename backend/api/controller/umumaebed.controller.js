const pool = require("../../db.config");
const { registerMemberService, OwnMemberregisterService } = require("../service/umumaebed.service");


const OwnMemberregister = (req,res)=>{
	console.log("umaebed");
	console.log(typeof(amount));
	const amount=req.body.amount;
	OwnMemberregisterService(amount,req.userId,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"db connection error"
			})
		}
		return res
		.status(200)
		.json({
			message:"sucessfully registered"
		})
	})


}

//admin register member
const registerMember = (req, res) => {
	const { name, lastname, idnumber, phone, batch, monthlyPayment } = req.body;
	if (!name || !lastname || !idnumber || !phone || !monthlyPayment || !batch) {
		return res.status(401).json({
			message: "please provide full information",
		});
	}

	registerMemberService(req.body, (err, results) => {
		if (err) {
			return res.status(500).json({
				message: "database connection error",
			});
		}
		return res.status(200).json({
			message: "member sucessfully registered",
		});
	});
};
const getMembers = (req, res) => {
	const sql = "SELECT m.*,u.name,lastname,phone,id_number FROM umumaebedmembers as m join usertable as u on (m.user_id=u.id) ";
	pool.query(sql, (err, results) => {
		if (err) {
			return res.status(500).json({ 
				error:err,
				message: "db connection error" });
		}
		return res.status(200).json({
			data: results,
		});
	});
};

// const updateMember = (req, res) => {
// 	const memberId = parseInt(req.params.id);
// 	const fieldsToUpdate = [];
// 	const values = [];
// 	if (req.body.name) {
// 		fieldsToUpdate.push("name=?");
// 		values.push(req.body.name);
// 	}
// 	if (req.body.lastname) {
// 		fieldsToUpdate.push("lastname=?");
// 		values.push(req.body.lastname);
// 	}
// 	if (req.body.idnumber) {
// 		fieldsToUpdate.push("id_number");
// 		values.push(req.body.idnumber);
// 	}
// 	if (req.body.phone) {
// 		fieldsToUpdate.push("phone");
// 		values.push(req.body.phone);
// 	}
// 	if (req.body.monthlyPayment) {
// 		fieldsToUpdate.push("monthlypayment");
// 		values.push(req.body.monthlyPayment);
// 	}
// 	const sql = `UPDATE umumaebed SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
// 	values.push(memberId);
// 	pool.query(sql, values, (err, results) => {
// 		if (err) {
// 			return res.status(500).json({
// 				error: err,
// 				message: "db connection error",
// 			});
// 		}
// 		return res.status(200).json({
// 			message: "member updated sucessfully",
// 			data: results,
// 		});
// 	});
// };
const deleteMember=(req,res)=>{
	const memberId =parseInt(req.params.id);
	const sql =`DELETE FROM umumaebedmembers WHERE id =?`
	pool.query(sql,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				message:"db connection error"
			})
		}
		return res.
		status(200)
		.json({message:"user deleted successfully"})
		
	})

}
module.exports = { registerMember, getMembers,OwnMemberregister };
