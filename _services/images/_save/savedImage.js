const mongoose = require("mongoose");
const bookmarkImages = mongoose.model("bookmarkImages");
const Images = mongoose.model("images");

const saveToMyImages = async ({ imageId, authPayload }) => {
  try {
    const image = await Images.findOne({ _id: imageId });
    if (authPayload.id == image.author) {
      return {
        code: 400,
        error: { message: "image was yourself!" },
      };
    }
    const bookmark = {
      user: authPayload.id,
      imageId: imageId,
    };

    const saved = await bookmarkImages.findOneAndUpdate(bookmark, bookmark, { upsert: true, new: true });

    return {
      code: 200,
      data: saved,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = saveToMyImages;
