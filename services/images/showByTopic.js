const mongoose = require("mongoose");
const Images = mongoose.model("images");
const ImageTopics = mongoose.model("imageTopics");
const Topics = mongoose.model("topics");
const BookmarkImages = mongoose.model("bookmarkImages");

const uploadImage = async ({ topicID, authPayload }) => {
  try {
    const topic = await Topics.findById(topicID).select("name");
    const imageIDs = await ImageTopics.find({ topic: topicID }).select("image");
    const lib = await BookmarkImages.find({ user: authPayload.id });
    const libs = lib.map((o) => o.imageId.toString());
    let imageList = [];
    for (let i = 0; i < imageIDs.length; i++) {
      const e = imageIDs[i].image;
      const image = await Images.findById(e)
        .select("-collectionId")
        .sort({ updatedAt: -1 })
        .populate("author", "_id username avatar")
        .lean();

      imageList.push({ ...image, isSave: libs.includes(e.toString()) });
    }

    return {
      code: 200,
      data: {
        topicName: topic.name,
        images: imageList,
      },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
