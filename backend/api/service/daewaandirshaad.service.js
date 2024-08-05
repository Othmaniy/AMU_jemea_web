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
const registerForNewCourseServie =(cid,userid,callback)=>{
    const sql =`INSERT INTO enrollment (user_id,course_id) VALUES(?,?)`
    pool.query(sql,[userid,cid],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}
module.exports={addCourseService,registerForNewCourseServie}