const mongoose = require("mongoose");
const { Schema } = mongoose;

const images = new Schema(
  {
    source: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    collectionId: {
      type: Schema.Types.ObjectId,
      ref: "collections",
    },
  },
  { timestamps: true },
);

images.index({ source: 1, author: 1, collectionId: 1 });

module.exports = images;
