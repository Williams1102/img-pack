const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SALT_BCRYPT, JWT_KEY } = require("../../config");
const { hash, compareSync } = bcrypt;

const UsersSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    avatar: {
      type: String,
      default: "/public/images/default.png",
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
  },
  { timestamp: true },
);

UsersSchema.methods.setPassword = async function (password) {
  // hash password
  this.password = await hash(password, SALT_BCRYPT);
};

UsersSchema.methods.validatePassword = async function (password) {
  const tf = await compareSync(password, this.password);
};

UsersSchema.methods.generateJWT = function () {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    },
    JWT_KEY,
    { algorithm: "HS256" },
  );
};

UsersSchema.methods.toAuthJSON = function () {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

module.exports = UsersSchema;
