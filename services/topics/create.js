const mongoose = require("mongoose");
const Collections = mongoose.model("topics");
const { deburr, camelCase } = require("lodash");

const create = async ({ name }) => {
  try {
    const slugName = camelCase(deburr(name));
    const topic = await Collections.findOneAndUpdate({ slugName }, { name, slugName }, { new: true, upsert: true });

    return {
      code: 200,
      data: topic,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = create;
