const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");

const following = async ({ userId, authPayload }) => {
  try {
    const { id } = authPayload;
    if (id === userId) {
      return {
        code: 400,
        error: { message: "dont follow yourself !" },
      };
    }
    const initData = {
      follower: id,
      following: userId,
    };

    const created = await Relationships.findOneAndUpdate(initData, initData, { upsert: true, new: true }).populate(
      "following",
      "username avatar",
    );

    return {
      code: 200,
      data: created,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = following;
