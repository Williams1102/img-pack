const mongoose = require("mongoose");
const Images = mongoose.model("images");
const ImageTopics = mongoose.model("imageTopics");

const uploadImage = async ({ authPayload, imageId }) => {
  try {
    const { id } = authPayload;
    await ImageTopics.deleteMany({ image: imageId });
    await Images.findOneAndDelete({ author: id, _id: imageId });

    return {
      code: 200,
      data: { message: "image was deleted !" },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
