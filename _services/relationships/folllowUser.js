const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");

const following = async ({ userId, authPayload }) => {
  try {
    const { id } = authPayload;
    const initData = {
      follower: id,
      following: userId
    }

    const created = await Relationships.create(initData);

    return {
      code: 200,
      data: created
    }

  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    }
  }
}

module.exports = following;