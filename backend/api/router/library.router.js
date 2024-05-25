const express = require("express")
const { addNewBook, getAllBooks, updateBook, deleteBook } = require("../controller/library.controller")


const router = express.Router()
router.post("/addnewbook",addNewBook),
router.get("/getallbooks",getAllBooks),
router.put("/updatebook/:id",updateBook),
router.delete("/deletebook/:id",deleteBook)



module.exports =router