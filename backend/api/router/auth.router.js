const express = require("express");
const router = express.Router();
const {createaccount,login}=require("../controller/auth.controller")
router.post("api/auth/createaccount",createaccount)
router.post("api/auth/login",login)