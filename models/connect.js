const mongoose = require("mongoose");
const { database } = require("../config/environment");
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
