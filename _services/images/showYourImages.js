const mongoose = require("mongoose");
const Images = mongoose.model("images");
const BookmarkImages = mongoose.model("bookmarkImages");
const uploadImage = async ({ userId, authPayload }) => {
  try {
    const images = await Images.find({ author: userId }).select("-collectionId").lean();
    const lib = await BookmarkImages.find({ user: authPayload.id });
    let list = images;
    if (userId != authPayload.id) {
      list = images.map((image) => {
        return { ...image, isSave: lib.includes(image._id) };
      });
    }
    return {
      code: 200,
      data: list,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
