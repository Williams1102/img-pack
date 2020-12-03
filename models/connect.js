const mongoose = require("mongoose");
const config = require("../config");

const { DB_IMGPACK } = config;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
};

mongoose.connect(DB_IMGPACK, options, () => {
  console.log("database connected ! ");
});
