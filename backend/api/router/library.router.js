const express = require("express");
const {
	addNewBook,
	getAllBooks,
	updateBook,
	deleteBook,
	uploadLibraryFile,
	addLibraryFile,
} = require("../controller/library.controller");
const multer = require("multer");
const router = express.Router();

const path = require("path");
const fs = require("fs");
const uploadDirectory=path.join(
	__dirname,
	"../../../backend/libaryfiles",
)
fs.mkdirSync(uploadDirectory, { recursive: true });
const storage=multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,uploadDirectory)
	},
	filename:function(req,file,cb){
		const uniqueSuffix=Date.now()
		cb(null,uniqueSuffix + file.originalname)
	}
})


const libraryFileUpload=multer({storage:storage})
router.post("/addnewbook", addNewBook),
	router.get("/getallbooks", getAllBooks),
	router.patch("/updatebook/:id", updateBook),
	router.delete("/deletebook/:id", deleteBook);

	//library file management
	//uploading in storage and returning filename
	router.post("/uploadlibraryfile",libraryFileUpload.single("file"),uploadLibraryFile)
	//inserting url and other description in to the database
	router.post('/addlibraryfile',addLibraryFile)
module.exports = router;
