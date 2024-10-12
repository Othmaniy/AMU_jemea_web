const express = require("express");
const {
	registerMember,
	getMembers,
	OwnMemberregister,
	updateAmount,
	deleteMember,
} = require("../controller/umumaebed.controller");
const { verifytoken } = require("../middleware/verifytoken");

const router = express.Router();

router.post("/ownmemberregister",verifytoken, OwnMemberregister);
router.post("/adminregistermemebr", registerMember);
router.get("/getmembers", getMembers);
router.patch("/updateamount/:id", updateAmount);
router.delete("/deletemember/:id",deleteMember)

module.exports = router;
