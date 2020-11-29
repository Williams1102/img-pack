const mongoose = require("mongoose");
const { model } = mongoose;

const getUserInfo = async ({ email }) => {
  try {
    const userInfo = await model("users").findOne({ email }).select("-password").lean();
    return {
      code: 200,
      data: userInfo,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getUserInfo;
