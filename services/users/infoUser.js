const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");
const Users = mongoose.model("users");
const Images = mongoose.model("images");

const infoUser = async ({ userId, authPayload }) => {
  try {
    const isFollow = await Relationships.findOne({ following: userId, follower: authPayload.id });
    const followersNumber = await Relationships.countDocuments({ following: userId });
    const followingsNumber = await Relationships.countDocuments({ follower: userId });
    const imageNumber = await Images.countDocuments({ author: userId });
    const info = await Users.findOne({ _id: userId }).select("-password");
    // console.log(followersNumber, " users follow vs followings: ", followingsNumber);
    return {
      code: 200,
      data: {
        users: info,
        analytics: {
          followers: followersNumber,
          followings: followingsNumber,
          images: imageNumber,
          isFollowed: !!isFollow,
        },
      },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = infoUser;
