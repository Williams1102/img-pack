const express = require("express");
const router = express.Router();
const auth = require("./auth");
const userController = require("controllers/accounts/users");
const checkEmailExists = require("lib/checkEmailExists");
const homepageController = require("controllers/newfeeds/homepage");
const { signUp, signIn } = userController;
const { homepage, search, viewImagesTopic } = homepageController;

router.route("/sign-up").post(auth.optional, checkEmailExists, signUp);
router.post("/sign-in", auth.optional, signIn);
router.get("/", auth.required, homepage);
router.get("/search", auth.required, search);
router.get("/topic/:topicId", auth.required, viewImagesTopic);
router.use(auth.required, require("./api"));

module.exports = router;
