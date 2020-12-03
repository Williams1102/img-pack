const mongoose = require("mongoose");
const { Schema } = mongoose;

const relationships = new Schema(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamp: true }
);

relationships.index({ follower: 1, following: 1 });

module.exports = relationships;
