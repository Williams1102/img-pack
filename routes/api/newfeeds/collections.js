const express = require("express");
const router = express.Router();
const collectionController = require("controllers/newfeeds/collections");
const { createCollection, showCollection, viewImageInCollection, viewAll, deleteC, rename } = collectionController;

router.route("/").post(createCollection).get(showCollection);
router.route("/all").get(viewAll);
router.route("/:collectionId").get(viewImageInCollection).delete(deleteC).put(rename);

module.exports = router;
