const mongoose = require("mongoose");
const Collections = mongoose.model("collections");
const Images = mongoose.model("images");

const create = async ({ authPayload }) => {
  try {
    const { id } = authPayload;
    const collections = await Collections.find({ author: id }).select("name _id");
    let response = [];
    for (let i = 0; i < collections.length; i++) {
      const e = collections[i];
      const images = await Images.find({ collectionId: e._id }).limit(3);
      response.push({ images, collection: e });
    }
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
