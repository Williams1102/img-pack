const mongoose = require("mongoose");
const Images = mongoose.model("images");
const ImageTopics = mongoose.model("imageTopics");

const uploadImage = async ({ authPayload, imageId }) => {
  try {
    const { id } = authPayload;
    const deleted = await Images.findOneAndDelete({ author: id, _id: imageId });
    if (!deleted) {
      throw new Error("not delete");
    }
    await ImageTopics.deleteMany({ image: imageId });

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
