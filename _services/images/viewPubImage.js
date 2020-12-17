const mongoose = require("mongoose");
const Images = mongoose.model("images");

const viewPublishImages = async () => {
  try {
    const images = await Images.find({}).populate("author", "_id username avatar").sort({ timestamp: -1 });

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

module.exports = viewPublishImages;
