const express = require("express");
const router = express.Router();

router.use(require("./accounts"));

module.exports = router;
