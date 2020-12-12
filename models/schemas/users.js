const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    avatar: {
      type: String,
      default: "default.png"
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
  },
  { timestamp: true }
);

module.exports = users;
