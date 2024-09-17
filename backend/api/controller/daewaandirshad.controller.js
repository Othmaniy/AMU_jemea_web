const pool = require("../../db.config");
const { addCourseService, registerForNewCourseServie, addDerseFilService } = require("../service/daewaandirshaad.service");
//file management starts
const uploadDerseFile=(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename)
}
const addDerseFile=(req,res)=>{
    const fileUrl=req.body.fileUrl;
    if(!fileUrl){
        return res.status(401).json({message:"no file provided"})
    }
    addDerseFilService(req.body,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({error:err,
                message:"error in adding file"
            })
        }
        return res
        .status(200)
        .json({message:"file sucessfully uploadded"})
    })
}
const addCourse=(req,res)=>{
    const {courseName,courseDescription,courseAuthor,courseUniqueId,ustaz}=req.body;
    if(!courseName||!courseDescription||!courseAuthor||!courseUniqueId||!ustaz){
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
const getFiles=(req,res)=>{
    const sql=`SELECT * FROM daewa_and_irshad_files`
    pool.query(sql,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"error in fetching user"
            })
           
        }
        return res
        .status(200)
        .json({data:results})
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
		fieldsToUpdate.push("course_unique_id= ?");
		values.push(req.body.courseId);
	}
    if (req.body.ustaz) {
		fieldsToUpdate.push("ustaz= ?");
		values.push(req.body.ustaz);
	}
    // if (req.body.reistrationStatus !== undefined) {
	// 	fieldsToUpdate.push("registration_status = ?");
	// 	values.push(req.body.status);
	// }


	if (fieldsToUpdate.length === 0) {
		return res.status(400).json({ message: "No fields provided to update" });
	}

	const sql = `UPDATE courses SET ${fieldsToUpdate.join(", ")} WHERE course_id = ?`;
	values.push(id);

	console.log(sql);
	console.log(values);

	pool.query(sql, values, (err, results) => {
		if (err) {
			console.log(err);
			return res.status(500).json({error:err, message: "database connection error" });
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
    const sql =`DELETE FROM courses WHERE course_id =?`
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
    const newStatus=req.body.status
    const sql =`update courses SET open_for_registration=? WHERE course_id=?`
    console.log(req.body);
    console.log(newStatus);
    // console.log(req);
    pool.query(sql,[newStatus,courseId],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
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
const getOpenCourse=(req,res)=>{
    const sql =`SELECT * FROM courses WHERE open_for_registration=1`
    pool.query(sql,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({error:err,
                message:"db connection error"
            })
        }
        return res
        .status(200)
        .json({data:results})
    })
}
const registerForNewCourse =(req,res)=>{
    // console.log(req); 
    console.log("from enroll controller id_number"+req.id_number);
    console.log("from enroll controller userid "+req.userId);
    console.log(typeof(req.userId));
    // const {courseID}=req.body
    const cid = parseInt(req.params.id)
    registerForNewCourseServie(cid,req.userId,(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"db error"
            })
        }
        if(results.affectedRows>0){
            return res
            .status(200)
            .json({
                message:"sucessfully registered"
            })
        }
    })

}
const getEnrolledUsers=(req,res)=>{
    const sql =`SELECT c.*,b.course_name,b.course_unique_id,u.name,u.lastname,u.id_number,i.phone FROM course_enrollment as c join courses as b on(c.course_id=b.course_id) join user as u on (c.user_id=u.id) join userinfo as i on (u.id=i.userid)WHERE b.course_name=?`;
    const courseName=req.query.courseName
    console.log(courseName);
    pool.query(sql,[courseName],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"db error"
            })
        }
        return res
        .status(200)
        .json({
            data:results
        })
    })
}
const changeEnrollmentStatus=async(req,res)=>{
    const newstatus = req.body.status
    const user_id =parseInt(req.params.useID)
    const sql =`UPDATE course_enrollment SET currently_enrolling=? WHERE user_id=?`
    pool.query(sql,[newstatus.user_id],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"databse error"
            })
        }
        if(results.affectedRows<1){
            return res
            .status(500)
            .json({
                message:"no rows affected"
            })
        }
        return res
        .status(200)
        .json({
            message:"user sucessfully affected",
            data:results
        })
    })

}
const deleteEnrolledUser=(req,res)=>{
    const id =parseInt(req.params.id)
    const sql=`DELETE from course_enrollment where id=?`
    pool.query(sql,[id],(err,results)=>{
        if(err){
            return res
            .status(500)
            .json({
                error:err,
                message:"db connection error"})
        }
        return res
        .status(200)
        .json({
            message:"user sucessfully deleted"
        })
    })
}
module.exports={
    addCourse,deleteCourse,getCourses,updateCourse,openCourse,registerForNewCourse,getEnrolledUsers,changeEnrollmentStatus,getOpenCourse,deleteEnrolledUser,uploadDerseFile,addDerseFile,getFiles
}