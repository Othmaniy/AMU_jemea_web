const pool = require("../../db.config");
const {
	InsertNEwBook,
	getAllBooksService,
	LibrarFilesService,
} = require("../service/library.service");
//file management
const uploadLibraryFile=(req,res)=>{
	const file =req.file;
	return res
	.status(200).json(file.filename)
}
const addLibraryFile=(req,res)=>{
	const fileUrl =req.body.fileUrl;
	if (!fileUrl) {
		return res.status(401).json({ message: "no file provided" });
	}
  LibrarFilesService(req.body,(err,results)=>{
	if(err){
		return res.status(500).json({
			error:err,
			message:"error uploading file "
		})
	}
	return res.status(200)
	.json({message:"file sucessfully uploaded"})
  })
}
const getLibraryFiles=(req,res)=>{
	const sql =`SELECT * from library_files`
	pool.query(sql,(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({
				error:err,
				message:"error in selecting library files"
			})
		}
		return res
		.status(200)
		.json({data:results})
	})
}
const AdminGetLibraryFiles=(req,res)=>{
	
	let countFiles=0;
	const countQuery =`SELECT COUNT(*) AS total FROM library_files`
	pool.query(countQuery,(err,countresult)=>{
		if(err){
			return res
			.status(500)
			.json({message:"error in count query"})
		}
		countFiles=countresult[0].total
		const {page,limit}=req.query
		let selectQuery=`select * from library_files`
		selectQuery+=` LIMIT ${(page-1)*limit},${limit}`
		pool.query(selectQuery,(err,results)=>{
			if(err){
				return res
				.status(500)
				.json({
					errror:err,
					message:"error in selecting files"
				})
			}
			return res
			.status(200)
			.json({
				data:results,
				totalCount:countFiles
			})
		})
	})


}
const deleteFile=(req,res)=>{
	const fileId =parseInt(req.params.id)
	const sql=`DELETE FROM library_files WHERE id =?`
	pool.query(sql,[fileId],(err,results)=>{
		if(err){
			return res
			.status(500)
			.json({message:"error in deleting file"})
		}
		return res
		.status(200)
		.json({
			message:"file sucessfully delted"
		})
	})
}
const addNewBook = (req, res) => {
	const { bookname, Author, category, isavailable } = req.body;
	// if (!bookname || !category || !Author) {
	// 	return res.status(401).json({
	// 		message: "please provide full infromation",
	// 	});
	// }
	InsertNEwBook(req.body, (err, results) => {
		if (err) {
			console.log(err);
			return res.status(500).json({
				message: "server error ",
			});
		} else {
			return res.status(200).json({ message: "book sucessfuly added " });
		}
	});

	return res.status(200).json({ message: "book added sucessfuly" });
	// console.log(results);
};

const getAllBooks = (req, res) => {
	const CountAllBooks=`SELECT COUNT(*) AS total FROM books`
	let countBooks=0;
	pool.query(CountAllBooks,(err,countresults)=>{
		if(err){
			console.log(err);
			return res
			.status(500)
			.json({message:"error in counting total temp accounts"})
		}
		countBooks=countresults[0].total;
		const {page=1,limit=10}=req.query
		let sql = "SELECT * FROM books";
		sql+=` LIMIT ${(page-1)*limit},${limit}`
	pool.query(sql, (err, results) => {
		if (err) {
			return res
			.status(500)
				.json({
					error:err,
					message:"error in fetching books"
				})
		}
		return res
			.status(200)
			.json({
				data:results,
				totalCount:countBooks

			})
	});
	})
	
};
const updateBook = (req, res) => {
	const bookId = parseInt(req.params.id);
	console.log("update");
	console.log(req.params.id);
	console.log("book id");
	console.log(bookId);
	console.log(typeof bookId);

	const fieldsToUpdate = [];
	const values = [];

	if (req.body.bookname) {
		fieldsToUpdate.push("book_name = ?");
		values.push(req.body.bookname);
	}
	if (req.body.author) {
		fieldsToUpdate.push("Author = ?");
		values.push(req.body.author);
	}
	if (req.body.category) {
		fieldsToUpdate.push("category = ?");
		values.push(req.body.category);
	}
	if (req.body.status !== undefined) {
		fieldsToUpdate.push("available = ?");
		values.push(req.body.status);
	}

	if (fieldsToUpdate.length === 0) {
		return res.status(400).json({ message: "No fields provided to update" });
	}

	const sql = `UPDATE books SET ${fieldsToUpdate.join(", ")} WHERE id = ?`;
	values.push(bookId);

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

const deleteBook = (req, res) => {
	const bookid = req.params.id;
	const sql = "DELETE FROM books WHERE id =?";
	pool.query(sql, [bookid], (err, results) => {
		if (err) {
			return res.status(500).json({ message: "server error" });
		}
		if (results.affectedRows > 0) {
			return res.status(200).json({ message: "book deleted sucessfully" });
		}
	});
};
module.exports = { addNewBook, getAllBooks, updateBook, deleteBook,uploadLibraryFile ,addLibraryFile,getLibraryFiles,AdminGetLibraryFiles,deleteFile};
