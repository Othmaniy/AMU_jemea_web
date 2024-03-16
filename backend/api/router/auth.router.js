const express = require("express");
const router = express.Router();
const {createaccount,login}=require("../controller/auth.controller")
router.post("/createaccount",createaccount)
router.post("/login",login)


module.exports = router;