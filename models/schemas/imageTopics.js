const mongoose = require("mongoose");
const { Schema } = mongoose;

const imageTopics = new Schema(
  {
    topic: {
      type: Schema.Types.ObjectId,
      ref: "topics",
      required: true,
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
  },
  { timestamp: true }
);

imageTopics.index({ topic: 1, image: 1 });

module.exports = imageTopics;
