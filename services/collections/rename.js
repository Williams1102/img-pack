const mongoose = require("mongoose");
const Collections = mongoose.model("collections");
const { deburr, camelCase } = require("lodash");
const renameCollectionServices = async ({collectionId, collectionInfo, authPayload }) => {
  try {
    const { name } = collectionInfo;
    const { id } = authPayload;
    const update = {
      name,
      slugName: camelCase(deburr(name)),
    };
    const collections = await Collections.findOneAndUpdate({ _id: collectionId, author: id }, update, { new: true });
    return {
      code: 200,
      data: { message: `updated collection: ${collections.name}` },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = renameCollectionServices;
