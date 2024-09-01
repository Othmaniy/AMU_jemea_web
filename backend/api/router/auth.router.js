const express = require("express");
const router = express.Router();
const { createaccount, login, createTempAccount, getTempAccounts, getUsers, assignRole } = require("../controller/auth.controller");
const { verifytoken, userrole } = require("../middleware/verifytoken");
router.post("/createaccount", verifytoken, userrole, (req, res) => {
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
router.get("/getusers",getUsers)
router.patch("/assignrole/:id",assignRole)
module.exports = router;
