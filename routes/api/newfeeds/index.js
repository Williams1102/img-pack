const express = require("express");
const router = express.Router();

const fs = require("fs");

const data = fs.readdirSync("./routes/api/newfeeds");

for (let i = 0; i < data.length; i++) {
  const e = data[i].split(".js")[0];
  if (e !== "index") {
    router.use(`/${e}`, require(`./${e}`));
  }
}

module.exports = router;
