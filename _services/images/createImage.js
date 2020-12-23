const mongoose = require("mongoose");
const Images = mongoose.model("images");
const ImageTopics = mongoose.model("imageTopics");
const createTopic = require("../topics/create");
const { pick } = require("lodash");

const uploadImage = async ({ imageInfo, authPayload }) => {
  try {
    const { source, description, collectionId, topics } = imageInfo;
    const { id } = authPayload;

    if (!topics) {
      return {
        code: 400,
        error: { message: "please provide topic name list !" },
      };
    }
    if (!collectionId) {
      return {
        code: 400,
        error: { message: "please provide collection !" },
      };
    }
    let topicList = [];
    if (Array.isArray(topics)) topicList = [...topics]; else topicList.push(topics);
    if (!source) {
      return {
        code: 400,
        error: { message: "please provide a image !" },
      };
    }

    const newData = {
      source,
      description,
      collectionId: collectionId,
      author: id,
    };
    const image = await Images.create(newData);

    for (let i = 0; i < topicList.length; i++) {
      const topic = topicList[i];
      const topicData = await createTopic({ name: topic });
      const topicID = topicData.data._id;
      await ImageTopics.create({ topic: topicID, image: image._id });
    }

    return {
      code: 200,
      data: { message: "uploaded !", image },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = uploadImage;
