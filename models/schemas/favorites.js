const mongoose = require("mongoose");
const { Schema } = mongoose;

const favorites = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    topic: {
      type: Schema.Types.ObjectId,
      ref: "topics",
      required: true,
    },
  },
  { timestamp: true }
);

favorites.index({ user: 1 });

module.exports = favorites;
