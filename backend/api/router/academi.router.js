const express = require("express");
const { uploadFile, addFile } = require("../controller/acadmi.controller");
const router = express.Router();

router.post("/uploadfile",uploadFile)
router.post("/addfile",addFile)
module.exports=router