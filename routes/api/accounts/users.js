const express = require("express");
const router = express.Router();
const auth = require("../../auth");
const passport = require("passport");
// const router = require("express-promise-router")();

const userController = require("controllers/accounts/users");
const checkEmailExists = require("lib/checkEmailExists");
const saveImage = require("lib/imageClass/saveImage");

const { signUp, signIn, changeInfo, getProfile } = userController;

router.route("/sign-up").post(auth.optional,checkEmailExists, signUp);
router.post("/sign-in",auth.optional, signIn);
router.use(auth.required);
router.route("/profile").get(getProfile).put(changeInfo);

module.exports = router;
