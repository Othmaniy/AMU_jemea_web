const express = require("express");
const { addCourse, getCourses, updateCourse, deleteCourse, openCourse, registerForNewCourse, getEnrolledUsers, changeEnrollmentStatus, getOpenCourse, deleteEnrolledUser } = require("../controller/daewaandirshad.controller");
const { verifytoken } = require("../middleware/verifytoken");

const router = express.Router();
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
//to be done for file management
// router.post("/daewandirshad/file", uploadFile);
// router.delete("/daewandirshad/deletefile/:id", DeleteFile);

module.exports=router