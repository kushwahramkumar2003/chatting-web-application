const { Router } = require("express");
const { signup, login } = require("../controller/auth.controller");

const router = Router();

router.post("/signup", signup);
router.post("/login", login);

module.export = router;
