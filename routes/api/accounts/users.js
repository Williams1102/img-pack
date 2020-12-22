const express = require("express");
const router = express.Router();
const userController = require("controllers/accounts/users");
const saveImage = require("lib/imageClass/saveImage");
const follow = require("controllers/accounts/following/followUser");
const unfollow = require("controllers/accounts/following/unfollowUser");
const followings = require("controllers/accounts/following/followings");
const followers = require("controllers/accounts/following/followers");
const viewList = require("controllers/accounts/following/viewListUser");
const { changeInfo, getProfile, getInfoUser } = userController;

router.route("/profile/me").get(getProfile).put(saveImage, changeInfo);
router.route("/profile/:userId").get(getInfoUser);
router.route("/follow/more").get(viewList);
router.route("/follow/:userId").post(follow).put(unfollow);
router.route("/followings").get(followings);
router.route("/followers").get(followers);

module.exports = router;
