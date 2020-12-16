const mongoose = require("mongoose");
const Collections = mongoose.model("collections");
const { deburr, camelCase } = require("lodash");

const create = async ({ collectionInfo, authPayload }) => {
  try {
    const { name } = collectionInfo;
    if (!name) {
      return {
        code: 400,
        error: { message: "input name collection " },
      };
    }
    const { id } = authPayload;
    const slugName = camelCase(deburr(name));
    const collection = await Collections.create({ name, slugName, author: id });
    return {
      code: 200,
      data: collection,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = create;
