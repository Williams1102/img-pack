const mongoose = require("mongoose");
const { Schema } = mongoose;

const notifications = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  message: {
    type: String,
  },
  endpoit: {
    type: String,
  },
  belongsTo: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
    index: true,
  },
});

module.exports = notifications;
