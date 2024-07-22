const express = require("express");
const {
	registerMember,
	getMembers,
	updateMember,
} = require("../controller/umumaebed.controller");

const router = express.Router();

router.post("/registerMember", registerMember);
router.get("/findmembers", getMembers);
router.patch("/updatemember/:id", updateMember);
// router.delete("/deletemember/:id",deleteMember)

module.exports = router;
