const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");
const addMessages = require("_services/notifications/addNewMessage");

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
      "following follower",
      "username avatar",
    );
    await addMessages({
      contents: {
        title: `Bạn đã theo dõi ${created.following.username} !`,
        message: ``,
        endpoint: `/api/v1/profile/${created.following._id}`,
      },
      userId: id,
    });
    await addMessages({
      contents: {
        title: `${created.follower.username} đã theo dõi bạn !`,
        message: ``,
        endpoint: `/api/v1/profile/${created.follower._id}`,
      },
      userId: created.following._id,
    });
    return {
      code: 200,
      data: { message: "followed !" },
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = following;
