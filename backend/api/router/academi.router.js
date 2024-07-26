const express = require("express");
const { uploadFile, addFile, getFiles } = require("../controller/acadmi.controller");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const uploadDirectory = path.join(
	__dirname,
	"../../../frontend/public/acadamiMaterials",
);
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDirectory);
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + file.originalname);
	},
});
const upload = multer({ storage: storage });

router.post("/uploadfile", upload.single("file"), uploadFile);
router.post("/addfile", addFile);
router.get("/getfiles/:department",getFiles)

module.exports = router;
