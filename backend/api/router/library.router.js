const express = require("express")

const router = express.Router()
router.post("/addnewbook",addNewBook),
router.post("/getallbooks",getAllbooks)



module.exports =router