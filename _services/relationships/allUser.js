const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");
const Users = mongoose.model("users");

const allUser = async ({ authPayload }) => {
  try {
    const { id } = authPayload;

    const founder = await Users.find({}).select("_id username avatar");
    const followers = await Relationships.find({ follower: id }).select("following");

    return {
      code: 200,
      data: { users: founder, followed: followers.map((o) => o.following) },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = allUser;
