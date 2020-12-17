const mongoose = require("mongoose");
const Images = mongoose.model("images");

const uploadImage = async ({ authPayload, imageInfo }) => {
  try {
    const { id } = authPayload;
    const { description, topic, collectionId } = imageInfo;
    const updateData = { description, collectionId };
    const updated = await Images.findOneAndUpdate({ author: id, _id: imageId }, updateData, { new: true });
		
    return {
      code: 200,
      data: { message: "image was updated !", image: updated },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
