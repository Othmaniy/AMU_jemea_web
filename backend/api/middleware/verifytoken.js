require("dotenv").config();
const jwt = require("jsonwebtoken");
const { getuserbyid, getbyphone } = require("../service/auth.service");
const pool = require("../../db.config");

const verifytoken = async (req, res, next) => {
	console.log(req.headers["x-access-token"]);
	const token = req.headers["x-access-token"];
	console.log("verify token");
	console.log(token);
	if (!token) {
		return res.status(403).json({ message: "token not provided" });
	}
	jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
		if (err) {
			console.log("inside verify tooken");
			console.log(err);
			return res
				.status(401)
				.json({ message: "unautherized or please login again" });
		}
		console.log("decode");
		console.log(decode);
		req.phoneNumber = decode.phoneNumber;
		req.userId=decode.id
		console.log("inside verify");
		// console.log(object);
		// req.user_id=decode.
		next();
	});
};
const userrole = async (req, res, next) => {
	const phoneNumber= req.phoneNumber;
	console.log("userrole");
	console.log(phoneNumber);
	try {
		console.log("inside");
		//   const sql = "SELECT * FROM usertable WHERE id_number=?"
		//   const user = pool.query(sql,[id_number])
		//    const user = getbyid(id_number,(err,results)=>{
		//     if(err){
		//         return res.status(500).json({message:"error fetching"})
		//     }
		//     return results;
		//    })
		const user = await getbyphone(phoneNumber);
		console.log("user");
		console.log(user);
		console.log("verify");
		console.log(user);
		const role = user[0].role;
		req.userRole = role;
		next();
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: "internal server error",
		});
	}
};

module.exports = {
	verifytoken,
	userrole,
};
