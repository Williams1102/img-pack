const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
    },
    avatar: {
      type: String,
    },
  },
  { timestamp: true }
);

users.index({ email: 1 });

module.exports = users;
