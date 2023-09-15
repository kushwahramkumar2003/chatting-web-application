const express = require("express");
const { signup, login, sendOTP } = require("../controller/auth.controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/sendOTP", sendOTP);

module.exports = router;
