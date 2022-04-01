const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");

const bookmarkedUser = async ({ authPayload }) => {
  try {
    const { id } = authPayload;

    const founder = await Relationships.find({ follower: id }).populate("following", "username avatar");

    return {
      code: 200,
      data: founder.map((o) => o.following),
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = bookmarkedUser;
