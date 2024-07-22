const pool = require("../../db.config");

const InsertNEwBook = (req, callback) => {
	const sql =
		"INSERT INTO books (book_name,Author,category,available) VALUES (?,?,?,?)";
	const available = req.isavailable ? req.isavailable : "available";
	pool.query(
		sql,
		[req.bookname, req.Author, req.category, available],
		(err, results) => {
			if (err) {
				return callback(err);
			}
			return null, results;
		},
	);
};

const getAllBooksService = (req, callback) => {
	const sql = "SELECT * FROM books";
	pool.query(sql, (err, results) => {
		if (err) {
			return callback(err);
		}
		return callback(null, results);
	});
};

module.exports = { InsertNEwBook, getAllBooksService };
