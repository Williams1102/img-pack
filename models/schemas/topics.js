const mongoose = require("mongoose");
const { Schema } = mongoose;

const topics = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slugName: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

topics.index({ slugName: 1 });

module.exports = topics;
