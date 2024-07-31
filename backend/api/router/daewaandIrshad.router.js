const express = require("express");
const { addCourse, getCourses, updateCourse, deleteCourse, openCourse } = require("../controller/daewaandirshad.controller");

const router = express.Router();
router.post("/addcourse",addCourse)
router.get('/getcourses',getCourses)
router.put("/updatecourse/:id",updateCourse)
router.delete('/deletecourse/:id',deleteCourse)
router.put('/opencourse/:id',openCourse)
//to be done for file management
// router.post("/daewandirshad/file", uploadFile);
// router.delete("/daewandirshad/deletefile/:id", DeleteFile);

module.exports=router