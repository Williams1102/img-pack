const mongoose = require("mongoose");
const config = require("../config");

const { database } = config;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
};

mongoose.connect(database, options, () => {
  console.log("database connected ! ");
});
