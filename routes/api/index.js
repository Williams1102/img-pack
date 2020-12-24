const express = require("express");
const router = express.Router();
const saveImage = require("lib/imageClass/saveImage");

router.route("/s3aws").post(saveImage);
router.use(require("./accounts"));
router.use("/newfeeds", require("./newfeeds"));

module.exports = router;
