const pool = require("../../db.config")

const addCourseService=(data,callback)=>{
    const sql =`INSERT INTO  courses(course_name,course_description,course_writter,course_unique_id,ustaz) VALUES(?,?,?,?,?)`
    pool.query(sql,[data.courseName,data.courseDescription,data.courseAuthor,data.courseUniqueId,data.ustaz],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}
const registerForNewCourseServie =(cid,userId,callback)=>{
    const sql =`INSERT INTO course_enrollment (user_id,course_id) VALUES(?,?)`
    pool.query(sql,[userId,cid],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}

//file management
const addDerseFilService=(data,callback)=>{
    const sql = `INSERT INTO daewa_and_irshad_files (file_url,file_description,author) VALUES (?,?,?)`
    pool.query(sql,[data.fileUrl,data.description,data.derseAuthor],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}
module.exports={addCourseService,registerForNewCourseServie,addDerseFilService}