const pool = require("../../db.config");

const addFileService = (data, callback) => {
	const sql =
		"INSERT INTO acadamifiles(file_url,file_description,department,Teacher_name) VALUES (?,?,?,?)";
	pool.query(sql, [data.fileUrl, data.filedescription,data.department,data.teacher], (err, results) => {
		if (err) {
			return callback(err);
		}
		return callback(null, results);
	});
};

module.exports = { addFileService };
