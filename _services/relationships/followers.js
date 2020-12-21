const mongoose = require("mongoose");
const Relationships = mongoose.model("relationships");

const followers = async ({ authPayload }) => {
  try {
    const { id } = authPayload;

    const founder = await Relationships.find({ following: id });

    return {
      code: 200,
      data: founder,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = followers;
