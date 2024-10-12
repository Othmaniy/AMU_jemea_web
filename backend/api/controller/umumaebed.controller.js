const pool = require("../../db.config");
const { registerMemberService, OwnMemberregisterService } = require("../service/umumaebed.service");


const OwnMemberregister = (req,res)=>{
	console.log("umuaebed");
	const amount=req.body.amount;
	console.log(typeof(amount));
	console.log(req.userId);
	const sql=`SELECT * FROM umumaebedmembers WHERE user_id=?`
	console.log(req.body)
	pool.query(sql,[req.userId],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error in selecting user"
			})
		}
		if(results.length>0){
			return res
			.status(403)
			.json({
				message:"you are already registered"
			})
		}
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
	const {page=1,limit=10,name,batch,department,phoneNumber}=req.query
	let countQuery = `SELECT COUNT(*) AS total FROM umumaebedmembers AS m 
	JOIN user AS u ON (m.user_id = u.id) 
	LEFT JOIN userinfo AS i ON (u.id = i.userid)`;
	
	let sql = "SELECT m.*,u.name,lastname,phone_number,i.department,batch FROM umumaebedmembers as m join user as u on (m.user_id=u.id) left join userinfo as i on(u.id=i.userid)";
		let conditions=[];
		if(name){
			conditions.push(`u.name=${pool.escape(name)}`)
		}
		if(department){
			conditions.push(`i.department=${pool.escape(department)}`)
		}
		if(batch){
			conditions.push(`i.batch=${pool.escape(batch)}`)
		}
		if(phoneNumber){
			conditions.push(`u.phone=${pool.escape(phoneNumber)}`)
		}
		if(conditions.length>0){
			sql+=" AND "+conditions.join(' AND ')
		}
	 if (conditions.length > 0) {
        countQuery += ` WHERE ${conditions.join(' AND ')}`;
        sql += ` WHERE ${conditions.join(' AND ')}`;
    }
		sql += ` LIMIT ${(page - 1) * limit}, ${parseInt(limit)}`;
	pool.query(countQuery,(err,countresults)=>{
		if(err){
			console.log(err);
			return res
			.status(500)
			.json({
				error:err,
				message:"error in counting total members"})
		}
		const count=countresults[0].total;
		
		
	pool.query(sql, (err, results) => {
		if (err) {
			return res.status(500).json({ 
				error:err,
				message: "db connection error" });
		}
		return res.status(200).json({
			data: results,
			totalCount:count
		});
	});
	})
	
};

const updateAmount = (req, res) => {
	const memberId = parseInt(req.params.id);
	console.log(req.body);
	const amount = req.body.amount
	const sql = `UPDATE umumaebedmembers SET amount=? WHERE id =?`;
	pool.query(sql, [amount,memberId], (err, results) => {
		if (err) {
			return res.status(500).json({
				error: err,
				message: "db connection error",
			});
		}
		return res.status(200).json({
			message: "updated sucessfully",
			data: results,
		});
	});
};
const deleteMember=(req,res)=>{
	const memberId =parseInt(req.params.id);
	const sql =`DELETE FROM umumaebedmembers WHERE id =?`
	pool.query(sql,[memberId],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"db connection error"
			})
		}
		return res.
		status(200)
		.json({message:"user deleted successfully"})
		
	})

}
module.exports = { registerMember, getMembers,OwnMemberregister,updateAmount ,deleteMember};
