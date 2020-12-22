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
      unique: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

collections.index({ slugName: 1, author: 1 });

module.exports = collections;
