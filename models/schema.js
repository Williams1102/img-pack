const mongoose = require("mongoose");
const schema = require("./schemas");
const { model } = mongoose;

module.exports = {
  bookmarkImages: model("bookmarkImages", schema.bookmarkImages),
  collections: model("collections", schema.collections),
  favorites: model("favorites", schema.favorites),
  images: model("images", schema.images),
  imageTopics: model("imageTopics", schema.imageTopics),
  relationships: model("relationships", schema.relationships),
  topics: model("topics", schema.topics),
  users: model("users", schema.users),
  notifications: model("notifications", schema.notifications),
};
