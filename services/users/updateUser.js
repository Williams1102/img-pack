const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../../config");

const { model } = mongoose;
const { hash } = bcrypt;
const { emailRegex, SALT_BCRYPT } = config;
const updateUser = async ({ info }) => {
  try {
    const { birthday, gender, password, newPassword, confirmPassword, email } = info;

    const query = { email };
    // find user by email in database
    const user = await model("users").findOne(query).lean();
    //check input password & database password is matched
    const correctPassword = user.validatePassword(password);
    if (!correctPassword) {
      return {
        code: 400,
        error: { message: "Current Password is incorrect!" },
      };
    }
    let updateData;
    // case: update gender
    if (gender) updateData.gender = gender;
    // case: update birthday
    if (birthday) updateData.birthday = birthday;
    //case: update password
    if (password) {
      // check new password and confirm-password is matched
      if (newPassword !== confirmPassword) {
        return {
          code: 400,
          error: { message: " New password and confirm-password is not matched" },
        };
      }
      // hash password
      await user.setPassword(newPassword);
    }

    // config options  - update
    const options = { new: true };
    user.updateMany(query, updateData, options);

    await user.save();

    return {
      code: 200,
      data: { message: "updated !" },
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
