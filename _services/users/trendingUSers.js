const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");
const Users = mongoose.model("users");
const Images = mongoose.model("images");
const { sortBy } = require("lodash");

const trendingUser = async ({}) => {
  try {
    const userss = await Users.find({}).select("_id username avatar");
    let response = userss.map((o) => ({ _id: o._id, username: o.username, avatar: o.avatar }));
    for (let i = 0; i < response.length; i++) {
      const e = response[i]._id;
      response[i].following = await Relationships.countDocuments({ following: e });
    }
    const dataSelect = response
      .sort((a, b) => {
        return b.following - a.following;
      })
      .slice(0, 5);
    return {
      code: 200,
      data: dataSelect,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = trendingUser;
