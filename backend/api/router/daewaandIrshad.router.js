const express = require("express");

const router = express.Router();
router.post("/daewandirshad/file", uploadFile);
router.delete("/daewandirshad/deletefile/:id", DeleteFile);
router.get("");
