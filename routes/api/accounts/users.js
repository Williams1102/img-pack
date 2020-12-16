const express = require("express");
const router = express.Router();
const userController = require("controllers/accounts/users");
const saveImage = require("lib/imageClass/saveImage");

const { changeInfo, getProfile } = userController;

router.route("/profile").get(getProfile).put(saveImage, changeInfo);

module.exports = router;
