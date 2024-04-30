require("doteenv").config();
const jwt =require("jsonwebtoken");
const { getuserbyid } = require("../service/auth.service");


const verifytoken =async(req,res,next)=>{
    const token =req.body.headers['x-access-token'];
    if(!token){
        return res.status(403).send({message:"token not provided"})
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,decode)=>{
        if(err){
            return res.status(401).send({message:"unautherized"})
        }
        req.id_number = decode.id_number
    })
    
    next();
}
// const userrole =async(req,res,next)=>{
//     const id_number =req.id_number;
//     const user =await getuserbyid(id_number);
//     console.log("verify");
//     const role =user[0].role
// }

module.exports={
    verifytoken,
    // userrole
}