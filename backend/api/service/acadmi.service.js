const pool = require("../../db.config")

const addFileService = (data,callback)=>{
    const sql ='INSERT INTO acadamifiles(file_url,file_description) VALUES (?,?)'
    pool.query(sql,[data.fileUrl,data.filedescription],(err,results)=>{
        if(err){
            return callback(err)
        }
        return callback(null,results)
    })
}

module.exports={addFileService}