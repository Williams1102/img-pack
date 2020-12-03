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
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    collectionId: {
      type: Schema.Types.ObjectId,
      ref: "collections",
    },
  },
  { timestamp: true }
);

images.index({ source: 1, author: 1, collectionId: 1 });

module.exports = images;
