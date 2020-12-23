const mongoose = require("mongoose");
const bookmarkImages = mongoose.model("bookmarkImages");

const unsaveToMyImages = async ({ imageId, authPayload }) => {
  try {
    const query = {
      user: authPayload.id,
      imageId: imageId,
    };

    const saved = await bookmarkImages.findOneAndDelete(query);
    if (!saved) {
      return {
        code: 400,
        // dataErr: saved,
      };
    }
    return {
      code: 200,
      data: {
        message: "unsaved !",
        // dataError: saved,
      },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = unsaveToMyImages;
