const express = require("express")

const router=express.Router()

router.post("/registerMember",registeruser)
router.get("/findmembers",getMembers)
router.patch("/updatemember/:id",updateMember)
router.delete("/deletemember/:id",deleteMember)



module.exports =router