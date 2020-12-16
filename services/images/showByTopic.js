const mongoose = require("mongoose");
const Images = mongoose.model("images");
const ImageTopics = mongoose.model("imageTopics");
const Topics = mongoose.model("topics");

const uploadImage = async ({ topicID }) => {
  try {
    const topic = await Topics.findById(topicID).select("name");
    const imageIDs = await ImageTopics.find({ topic: topicID }).select("image");

    let imageList = [];
    for (let i = 0; i < imageIDs.length; i++) {
      const e = imageIDs[i].image;
      const image = await Images.findById(e).populate("author").lean();
      imageList.push(image);
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
