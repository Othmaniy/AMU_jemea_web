const express = require("express")
const { registerleader, getLeaders, deleteLeader, updateLeader, getRecentLeaders } = require("../controller/leaders.controller")
const router = express.Router()

router.post("/registerleader",registerleader)
router.get("/getleaders",getLeaders)
router.delete("/deleteleader/:id",deleteLeader)
router.patch("/updateleader/:id",updateLeader)
router.get("/getrecentleaders",getRecentLeaders)

module.exports=router
