const mongoose = require("mongoose");
const Images = mongoose.model("images");
const Collections = mongoose.model("collections");

const viewOne = async ({ imageId }) => {
  try {
    console.log(imageId);
    const image = await Images.findOne({ _id: imageId }).populate("collectionId", "_id name");
    if (!image) {
      return {
        code: 400,
        error: {},
      };
    }
    if (!image.collectionId) image.collectionId = {};
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
