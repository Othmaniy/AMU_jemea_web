const pool = require("../../db.config");
const bcrypt=require("bcrypt")
const createaccountservice=(data,callback)=>{
    const salt =bcrypt.genSaltSync();
    const hashedpassword = bcrypt.hashSync(data.password,salt)
    const sql ="INSERT INTO usertable (name,lastname,id_number,password,phone,emergency_phone) VALUES (?,?,?,?,?,?)"
pool.query(sql,[data.name,data.lastname,data.id_number,hashedpassword,data.phone,data.emergency_phone],(err,results)=>{
    if(err){
        return callback(err)
    }
    return callback(null,results)
})
}

module.exports={createaccountservice}