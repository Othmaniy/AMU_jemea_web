const pool = require("../../db.config")

const registerleader=(req,res)=>{
    const {firstName,lastName,role,phoneNumber}=req.body
    const sql=`INSERT INTO leaders(first_name,last_name,phone_number,role) VALUES (?,?,?,?)`
    pool.query(sql,[firstName,lastName,phoneNumber,role],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"error in inserting leaders"})
        }
        return res
        .status(200)
        .json({message:'leader sucessfully registered'})

    })
}
const getLeaders=(req,res)=>{
    const sql=`SELECT * FROM leaders ORDER BY createdat DESC`
    pool.query(sql,(err,results)=>{
        if(err){
            return res.status(500)
            .json({
                error:err,
                message:"error in selecting leaders"
            })
        }
        return res
        .status(200)
        .json({
            data:results
        })
    })
}
const deleteLeader=(req,res)=>{
    const id= parseInt(req.params.id)
    const sql = `DELETE FROM leaders where id =?`
    pool.query(sql,[id],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"error in deleting leader"
            })
        }
        return res
        .status(200)
        .json({
            message:"leader sucessfully deleted"
        })
    })
}
const updateLeader=(req,res)=>{
    const id = parseInt(req.params.id)
    
    const fieldsToUpdate=[]
    const values=[]
    if (req.body.firstName) {
		fieldsToUpdate.push("first_name = ?");
		values.push(req.body.firstName);
	}
	if (req.body.lastName) {
		fieldsToUpdate.push("last_name = ?");
		values.push(req.body.author);
	}
	if (req.body.role) {
		fieldsToUpdate.push("role = ?");
		values.push(req.body.role);
	}
    if (req.body.phoneNumber) {
		fieldsToUpdate.push(" phone_number = ?");
		values.push(req.body.phoneNumber);
	}
    
	if (fieldsToUpdate.length === 0) {
		return res.status(400).json({ message: "No fields provided to update" });
	}
  const sql=`UPDATE leaders SET ${fieldsToUpdate.join(", ")} WHERE id =?`
  values.push(id)
  pool.query(sql,values,(err,results)=>{
    if(err){
        return res
        .status(500)
        .json({
            message:"error in updating leader"
        })
    }
    return res
    .status(200)
    .json({
        message:"successfully updated"
    })
  })
}
const getRecentLeaders = (req, res) => {
    const sql = `
        SELECT * FROM (
            SELECT * FROM leaders WHERE role = 'amir' ORDER BY createdat DESC LIMIT 1
        ) AS amir
        UNION
        SELECT * FROM (
            SELECT * FROM leaders WHERE role = 'viceAmir' ORDER BY createdat DESC LIMIT 1
        ) AS recent_vice_amir
        UNION
        SELECT * FROM (
            SELECT * FROM leaders WHERE role = 'secretary' ORDER BY createdat DESC LIMIT 1
        ) AS recent_secretary;
    `;
    
    pool.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: "Error in selecting leaders"
            });
        }
        return res.status(200).json({
            data: results
        });
    });
};

module.exports={getLeaders,registerleader,deleteLeader,updateLeader,getRecentLeaders}