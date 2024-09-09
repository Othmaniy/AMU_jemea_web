const express = require("express");
const { addCourse, getCourses, updateCourse, deleteCourse, openCourse, registerForNewCourse, getEnrolledUsers, changeEnrollmentStatus, getOpenCourse, deleteEnrolledUser, uploadDerseFile, addDerseFile, getFiles } = require("../controller/daewaandirshad.controller");
const { verifytoken } = require("../middleware/verifytoken");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const uploadDirectory=path.join(
    __dirname,
	"../../../backend/derseFolders",
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
const derseFileUpload=multer({storage:storage})
router.post("/addcourse",addCourse)
router.get('/getcourses',getCourses)
router.put("/updatecourse/:id",updateCourse)
router.delete('/deletecourse/:id',deleteCourse)
router.put('/opencourse/:id',openCourse)
router.get('/getopencourses',getOpenCourse)
router.post("/registerfornewcourse/:id",verifytoken,registerForNewCourse)
router.get("/getenrolleduser",getEnrolledUsers);
router.put("/changeenrollment/:id",changeEnrollmentStatus)
router.delete("/deleteenrolleduser/:id",deleteEnrolledUser)
// file management
router.post("/uploaddersefile",derseFileUpload.single("file"), uploadDerseFile);
router.post("/adddersefile",addDerseFile)
router.get("/getfiles",getFiles)
// router.delete("/daewandirshad/deletefile/:id", DeleteFile);

module.exports=router