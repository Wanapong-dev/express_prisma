const express = require("express")
const createError = require("../utils/createError")
const router = express.Router()
const authController = require("../controllers/auth-controller")

router.post("/register",authController.register)
router.post("/login",authController.login)
router.post("/forget-password",authController.forgetPassword)
router.post("/reset-password",authController.resetPassword)

module.exports = router;
