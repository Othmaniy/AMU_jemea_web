const express = require("express");
const router = express.Router();
const { createaccount, login, createTempAccount, getTempAccounts, getUsers, assignRole, getAllUsers, changeApproveStatus, updateUser, deleteTempUser } = require("../controller/auth.controller");
const { verifytoken, userrole } = require("../middleware/verifytoken");
router.post("/createaccount", verifytoken, userrole, (req, res) => {
	console.log("verify router");
	console.log(req);
	if (req.userRole !== "Admin") {
		return res
			.status(403)
			.json({ message: "you donot have acess to this page" });
	}
	createaccount(req, res);
});
router.post("/login", login);
router.post("/createtempaccount",createTempAccount)
router.get('/gettempaccounts',getTempAccounts)
router.delete("/deletetempuser/:id",deleteTempUser)
router.patch("/changeapprovestatus/:id",changeApproveStatus)
//get users with paination
router.get("/getusers",getUsers)
// router.get("/getalumnis",getUsers)
//get users without pagination
router.get("/getallusers",getAllUsers)
router.patch("/assignrole/:id",assignRole)
router.patch("/updateuser/:id",updateUser)
module.exports = router;
