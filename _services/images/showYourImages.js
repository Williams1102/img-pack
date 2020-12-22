const mongoose = require("mongoose");
const Images = mongoose.model("images");

const uploadImage = async ({ userId }) => {
  try {
    const images = await Images.find({ author: userId }).select("-collectionId");

    return {
      code: 200,
      data: images,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
