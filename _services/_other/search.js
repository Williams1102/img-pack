const mongoose = require("mongoose");
const Topics = mongoose.model("topics");
const Users = mongoose.model("users");

const searchService = async ({ authPayload }) => {
  try {
    const { id } = authPayload;
    const userss = await Users.find({}).select("_id username");
    const topicss = await Topics.find({}).select("_id name");
    const list = {
      users: userss.filter((user) => user._id !== id),
      topics: topicss,
    };
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

module.exports = searchService;