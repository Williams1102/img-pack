const mongoose = require("mongoose");
const { Schema } = mongoose;

const favorites = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    topic: {
      type: Schema.Types.ObjectId,
      ref: "topics",
    },
  },
  { timestamp: true }
);

favorites.index({ user: 1 });

module.exports = favorites;
