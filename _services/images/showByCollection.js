const mongoose = require("mongoose");
const Images = mongoose.model("images");
const Collections = mongoose.model("collections");

const uploadImage = async ({ authPayload, collectionId }) => {
  try {
    const { id } = authPayload;
    const collection = await Collections.findOne({ _id: collectionId, author: id }).select("name");
    const images = await Images.find({ author: id, collectionId });

    return {
      code: 200,
      data: {
        collectionName: collection.name,
        images,
      },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
