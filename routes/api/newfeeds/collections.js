const express = require("express");
const router = express.Router();
const collectionController = require("controllers/newfeeds/collections");
const { createCollection, showCollection, viewImageInCollection, viewAll } = collectionController;

router.route("/").post(createCollection).get(showCollection);
router.route("/all").get(viewAll);
router.route("/:collectionId").get(viewImageInCollection);

module.exports = router;
