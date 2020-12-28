const mongoose = require("mongoose");
const bookmarkImages = mongoose.model("bookmarkImages");

const saveToMyImages = async ({ authPayload }) => {
  try {
    const saved = await bookmarkImages.find({ user: authPayload.id }).populate({
      path: "imageId",
      select: "-collectionId",
      populate: {
        path: "author",
        select: "username avatar",
      },
    });

    return {
      code: 200,
      data: saved.map((o) => o.imageId).filter((o) => o),
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = saveToMyImages;
