const express = require("express");
const router = express.Router();

router.use(require("./accounts"));
router.use("/newfeeds", require("./newfeeds"));

module.exports = router;
