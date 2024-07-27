const pool = require("../../db.config");
const { addFileService } = require("../service/acadmi.service");
const uploadFile = (req, res) => {
	const file = req.file;
	res.status(200).json(file.filename);
};
const addFile = (req, res) => {
	const fileUrl = req.body.fileUrl;
	const fileDescription = req.body.filedescription;
	if (!fileUrl) {
		return res.status(401).json({ message: "no file provided" });
	}
	addFileService(req.body, (err, results) => {
		if (err) {
			return res.status(500).json({
				message: "error adding file",
			});
		}
		return res.status(200).json({ message: "file sucessfully uploaded" });
	});
};

const getFiles=(req,res)=>{
	const sql =`SELECT * from acadamifiles WHERE department=?`

	pool.query(sql,[req.params.department],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"databse connection error"
			})
		}
		return res
		.status(200)
		.json({data:results})
	})
}
const getFileTables=(req,res)=>{
	const sql='SELECT * FROM acadamifiles'
	pool.query(sql,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"database connection error"
			})
		}
		return res
		.status(200)
		.json({
			data:results
		})
	})
}
const updateFile=(req,res)=>{
	const fileid =parseInt(req.params.id);
	const fieldsToUpdate=[];
	const values =[];
	if(req.body.fileUrl){
		fieldsToUpdate.push("file_url=?")
		values.push(req.body.fileUrl)
	}
	if(req.body.filedescription){
		fieldsToUpdate.push('file_description=?');
		values.push(req.body.filedescription)
	}
	if(req.body.department){
		fieldsToUpdate.push('department=?');
		values.push(req.body.department)
	}
	if(req.body.teacher){
		fieldsToUpdate.push('Teacher_name=?');
		values.push(req.body.teacher)
	}
	if (fieldsToUpdate.length === 0) {
		return res.status(400).json({ message: "No fields provided to update" });
	}
	const sql= `UPDATE acadamifiles SET ${fieldsToUpdate.join(", ")} WHERE id = ?`
    values.push(fileid)
	pool.query(sql,values,(err,results)=>{
		if(err){
			console.log(err);
			return res
			.status(500)
			.json({
				error:err,
				message:"database connection error"
			})
		}
		if (results.affectedRows > 0) {
			return res.status(200).json({ message: "updated successfully" });
		}
		return res.status(200).json({ message: "no rows updated" });
	})
}
const deleteFile=(req,res)=>{
	const fileid = parseInt(req.params.id);
	const sql = 'DELETE FROM acadamifiles WHERE id=?'
	pool.query(sql,fileid,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error deleting file"
			})
		}
		return res
		.status(200)
		.json({
			message:"deleted sucessfully"
		})
	})

}
module.exports = { uploadFile, addFile,getFiles,getFileTables,updateFile,deleteFile };
