const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
};

mongoose.connect(process.env.DB_IMGPACK, options);
