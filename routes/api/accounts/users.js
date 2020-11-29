const express = require("express");
const router = express.Router();
const userController = require("../../../controllers/accounts/users");

const { signUp, changeInfo, getProfile } = userController;

router.route("/sign-up").post(signUp);

router.route("/profile").get(getProfile).put(changeInfo);

module.exports = router;
