const mongoose = require("mongoose");
const Images = mongoose.model("images");
const Collections = mongoose.model("collections");

const viewOne = async ({ authPayload, imageId }) => {
  try {
    const { id } = authPayload;

    const image = await Images.findOne({ author: id, _id: imageId }).populate("collectionId", "_id name");

    return {
      code: 200,
      data: image,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = viewOne;
