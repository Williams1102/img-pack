const mongoose = require("mongoose");
const Topics = mongoose.model("topics");
const Users = mongoose.model("users");

const searchService = async ({ authPayload }) => {
  try {
    const { id } = authPayload;
    const userList = await Users.find({}).select("_id username avatar");
    const topicList = await Topics.find({}).select("_id name");
    const list = {
      users: userList.filter((user) => user._id !== id),
      topics: topicList,
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
