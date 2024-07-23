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

module.exports = { uploadFile, addFile };
