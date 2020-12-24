const express = require("express");
const router = express.Router();
const imageController = require("controllers/newfeeds/images");
const { upload, viewYourImages, viewDetails, deleteImg, updateIMG } = imageController;

const showOwnImage = require("controllers/newfeeds/users/ownerImage");

router.route("/").post(upload).get(viewYourImages);
router.route("/:imageId").get(viewDetails).delete(deleteImg).put(updateIMG);
router.route("/users/:userId").get(showOwnImage);

module.exports = router;
