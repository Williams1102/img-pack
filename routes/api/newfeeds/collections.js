const express = require("express");
const router = express.Router();
const collectionController = require("controllers/newfeeds/collections");
const { createCollection, showCollection, viewImageInCollection } = collectionController;

router.route("/").post(createCollection).get(showCollection);
router.route("/:collectionId").get(viewImageInCollection);

module.exports = router;
