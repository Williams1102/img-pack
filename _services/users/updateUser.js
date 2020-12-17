const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../../config");

const { model } = mongoose;
const { hash } = bcrypt;
const { emailRegex, SALT_BCRYPT } = config;
const updateUser = async ({ info, authPayload }) => {
  try {
    const { birthday, gender, password, newPassword, confirmPassword } = info;
    const { email, id } = authPayload;
    const query = { email, _id: id };
    // find user by email in database
    const user = await model("users").findOne(query);
    console.log(user);
    // case: update gender
    if (gender) user.gender = gender;
    // case: update birthday
    if (birthday) user.birthday = moment(birthday, ["DD-MM-YYYY", "DD/MM/YYYY"]).unix() * 1000;
    //case: update password
    if (newPassword) {
      //check input password & database password is matched
      const correctPassword = await user.validatePassword(password);
      if (!correctPassword) {
        return {
          code: 400,
          error: { message: "Current Password is incorrect!" },
        };
      }
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
    user.save();
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
