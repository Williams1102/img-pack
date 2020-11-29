const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config= require("../../config");

const { model } = mongoose;
const { hash } = bcrypt;
const { emailRegex, saltBcrypt } = config;
const updateUser = async ({ info }) => {
  try {
    const { birthday, gender, oldPassword, password, confirmPassword, email } = info;
    const query = { email };
    let updateData;
    // case: update gender
    if (gender) updateData.gender = gender;
    // case: update birthday
    if (birthday) updateData.birthday = birthday;
    //case: update password
    if (password) {
      // check new password and confirm-password is matched
      if (password !== confirmPassword) {
        return {
          code: 400,
          error: { message: " New password and confirm-password is not matched" },
        };
      }

      // find user by email in database
      const user = await model("users").findOne(query).lean();

      //check input password & database password is matched
      const correctPassword = await bcrypt.compare(oldPassword, user.password);

      if (!correctPassword) {
        return {
          code: 400,
          error: { message: "Current Password is incorrect!" },
        };
      }

      // hash password
      updateData.password = await bcrypt.hash(password, saltBcrypt);
    }

    // config options  - update
    const options = { new: true };
    await model("users").findOneAndUpdate(query, updateData, options);

    // get user after update
    const updated = await model("users").findOne(query).lean();

    return {
      code: 200,
      data: updated,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = updateUser;

/**
updateField: enum("password" || "birthday","gender")
*/
