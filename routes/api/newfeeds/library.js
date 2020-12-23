const express = require("express");
const router = express.Router();
const saveImage = require("controllers/newfeeds/library/saveToLib");
const unsavedImage = require("controllers/newfeeds/library/unsaved");
const views = require("controllers/newfeeds/library/viewLibrary");

router.get("/", views);
router.post("/save/:imageId", saveImage);
router.put("/unsave/:imageId", unsavedImage);

module.exports = router;
