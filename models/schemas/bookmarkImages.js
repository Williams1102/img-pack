const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookmarkImages = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
  },
  { timestamp: true },
);

bookmarkImages.index({ user: 1, image: 1 });

module.exports = bookmarkImages;
