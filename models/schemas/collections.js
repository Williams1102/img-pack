const mongoose = require("mongoose");
const { Schema } = mongoose;

const collections = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slugName: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamp: true }
);

collections.index({ slugName: 1, author: 1 });

module.exports = collections;
