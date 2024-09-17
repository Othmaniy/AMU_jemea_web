const pool = require("../../db.config");
const LibrarFilesService=(data,callback)=>{
	const sql =`INSERT INTO library_files (file_url,file_description,author,published_year) VALUES (?,?,?,?)`
	pool.query(sql,[data.fileUrl,data.fileDescription,data.author,data.publishedYear],(err,results)=>{
		if(err){
			return callback(err)
		}
		return callback(null,results)
	})
}
const InsertNEwBook = (req, callback) => {
	const sql =
		"INSERT INTO books (book_name,Author,category,available,published_year) VALUES (?,?,?,?,?)";
	const available = req.isavailable ? req.isavailable : "available";
	pool.query(
		sql,
		[req.bookname, req.Author, req.category, available,req.publishedYear],
		(err, results) => {
			if (err) {
				return callback(err);
			}
			return null, results;
		},
	);
};

const getAllBooksService = (req, callback) => {
	
};

module.exports = { InsertNEwBook, getAllBooksService,LibrarFilesService };
