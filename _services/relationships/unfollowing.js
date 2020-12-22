const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");

const unfollow = async ({ userId, authPayload }) => {
  try {
    const { id } = authPayload;
    const query = {
      follower: id,
      following: userId
    }

    const delegates = await Relationships.findOneAndDelete(query);

    return {
      code: 200,
      data: { message: "unfollow !" }
    }

  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    }
  }
}

module.exports = unfollow;