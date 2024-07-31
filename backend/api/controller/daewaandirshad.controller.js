const pool = require("../../db.config");
const { addCourseService } = require("../service/daewaandirshaad.service");

const addCourse=(req,res)=>{
    const {courseName,courseDescription,courseAuthor,courseId}=req.body;
    if(!courseName||!courseDescription||!courseAuthor||!courseId){
        return res
        .status(401)
        .json({
            message:"please provide full information"
        })
    }
    addCourseService(req.body,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:'database connection error'
            })
        }
        console.log(results);
        if(results.affectedRows==1){
            return res
            .status(200)
            .json({
                message:"course sucessfully added"
            })
        }
    })
}
const getCourses =(req,res)=>{
    const sql =`SELECT * FROM courses`
    pool.query(sql,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                messsage:"database connection error"
            })
        }
        return res
        .status(200)
        .json({
            data:results
        })
    })
}
const updateCourse = (req, res) => {
	const id = parseInt(req.params.id);
	const fieldsToUpdate = [];
	const values = [];

	if (req.body.courseName) {
		fieldsToUpdate.push("course_name = ?");
		values.push(req.body.courseName);
	}
	if (req.body.courseDescription) {
		fieldsToUpdate.push("course_description = ?");
		values.push(req.body.courseDescription);
	}
	if (req.body.courseAuthor) {
		fieldsToUpdate.push("course_writter = ?");
		values.push(req.body.courseAuthor);
	}
    if (req.body.courseId) {
		fieldsToUpdate.push("course_id = ?");
		values.push(req.body.courseId);
	}
    if (req.body.reistrationStatus !== undefined) {
		fieldsToUpdate.push("registration_status = ?");
		values.push(req.body.status);
	}


	if (fieldsToUpdate.length === 0) {
		return res.status(400).json({ message: "No fields provided to update" });
	}

	const sql = `UPDATE courses SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
	values.push(id);

	console.log(sql);
	console.log(values);

	pool.query(sql, values, (err, results) => {
		if (err) {
			console.log(err);
			return res.status(500).json({ message: "database connection error" });
		}
		console.log("results");
		console.log(results.affectedRows);
		if (results.affectedRows > 0) {
			return res.status(200).json({ message: "updated successfully" });
		}
		return res.status(200).json({ message: "no rows updated" });
	});
};
const deleteCourse=(req,res)=>{
    const id =parseInt(req.params.id)
    const sql =`DELETE FROM courses WHERE id =?`
    pool.query(sql,[id],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                message:"db connection error"
            })
        }
        return res
        .status(200)
        .json({
            message:"course sucsessfully deleted"
        })
    })
}
const openCourse=(req,res)=>{
    const courseId =parseInt(req.params.id);
    const newStatus =req.body.status==1?0:1
    const sql =`update courses SET open_for_registration=? WHERE id=?`
    pool.query(sql,[newStatus,courseId],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                message:"db error"
            })
        }
        return res
        .status(200)
        .json({
            message:"updated sucessfully"
        })
    })

}
module.exports={
    addCourse,deleteCourse,getCourses,updateCourse,openCourse
}