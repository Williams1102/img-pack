const mongoose = require("mongoose");
const Collections = mongoose.model("collections");
const Images = mongoose.model("images");

const deleteCollectionServices = async ({ collectionId, authPayload }) => {
  try {
    const { id } = authPayload;
    const collections = await Collections.findOneAndDelete({ _id: collectionId, author: id });
    return {
      code: 200,
      data: { message: `deleted collection: ${collections.name}` },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = deleteCollectionServices;
