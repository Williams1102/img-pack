const mongoose = require("mongoose");
const bookmarkImages = mongoose.model("bookmarkImages");

const saveToMyImages = async ({ imageId, authPayload }) => {
  try {
    const bookmark = {
      user: authPayload.id,
      imageId: imageId,
    };

    const saved = await bookmarkImages.create(bookmark);

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
