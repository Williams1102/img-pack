const express = require("express");
const router = express.Router();
const imageController = require("controllers/newfeeds/images");
const { upload, viewYourImages, viewDetails, deleteImg, updateIMG } = imageController;
const saveImage = require("lib/imageClass/saveImage");

router.route("/").post(saveImage, upload).get(viewYourImages);
router.route("/:imageId").get(viewDetails).delete(deleteImg).put(updateIMG);

module.exports = router;
