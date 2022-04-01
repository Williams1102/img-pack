const mongoose = require("mongoose");
const Collections = mongoose.model("collections");
const Images = mongoose.model("images");

const create = async ({ authPayload }) => {
  try {
    const { id } = authPayload;
    const collections = await Collections.find({ author: id }).select("name _id");
    let response = collections;
    return {
      code: 200,
      data: response,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = create;
