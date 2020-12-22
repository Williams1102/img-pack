const express = require("express");
const router = express.Router();
const userController = require("controllers/accounts/users");
const saveImage = require("lib/imageClass/saveImage");
const follow = require("controllers/accounts/following/followUser");
const unfollow = require("/controllers/accounts/following/unfollowUser");
const { changeInfo, getProfile } = userController;

router.route("/profile").get(getProfile).put(saveImage, changeInfo);
// router.route("/following").get(allUser);
router.route("/following/:userId").post(follow).delete(unfollow);

module.exports = router;
