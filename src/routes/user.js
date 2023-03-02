const express = require("express");
const { handleLogin } = require("../controllers/userController");

const router = express.Router();

// api users
router.post("/login", handleLogin);

module.exports = router;
