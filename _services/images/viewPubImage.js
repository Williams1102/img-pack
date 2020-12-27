const mongoose = require("mongoose");
const Images = mongoose.model("images");
const BookmarkImages = mongoose.model("bookmarkImages");

const viewPublishImages = async ({ authPayload }) => {
  try {
    const images = await Images.find({}).populate("author", "_id username avatar").sort({ updatedAt: -1 }).lean();
    const lib = await BookmarkImages.find({ user: authPayload.id }).select("imageId");
    const libImg = lib.map((o) => o.imageId.toString());
    const list = images.map((image) => {
      if (authPayload.id == image.author._id) return { ...image, isSave: "my images" };
      else return { ...image, isSave: libImg.includes(image._id.toString()) };
    });
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

module.exports = viewPublishImages;
