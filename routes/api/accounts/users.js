const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();

const userController = require("../../../controllers/accounts/users");
const checkEmailExists = require("../../../lib/checkEmailExists")

const { signUp, changeInfo, getProfile } = userController;

router.route("/sign-up").post(checkEmailExists, signUp);
router.route("/sign-in").post();

router.route("/profile").get(getProfile).put(changeInfo);

module.exports = router;
