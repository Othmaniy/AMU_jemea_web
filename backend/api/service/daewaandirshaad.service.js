const pool = require("../../db.config")

const addCourseService=(data,callback)=>{
    const sql =`INSERT INTO  courses(course_name,course_description,course_writter,course_id) VALUES(?,?,?,?)`
    pool.query(sql,[data.courseName,data.courseDescription,data.courseAuthor,data.courseId],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}

module.exports={addCourseService}