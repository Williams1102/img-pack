const mongoose = require("mongoose");
const { Schema } = mongoose;

const relationships = new Schema(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
  },
  { timestamp: true }
);

relationships.index({ follower: 1, following: 1 });

module.exports = relationships;
