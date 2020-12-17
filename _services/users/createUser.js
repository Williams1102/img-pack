const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../../config");
const Users = mongoose.model("users");
const { hash } = bcrypt;
const { emailRegex, SALT_BCRYPT } = config;
const createUser = async ({ infoUser }) => {
  try {
    const { email, password, confirmPassword, birthday } = infoUser;
    //check email
    const isEmail = emailRegex.test(email);
    if (!isEmail) {
      return {
        code: 200,
        error: { message: "You need to fill email !" },
      };
    }
    // check password and confirm password is matched
    if (password !== confirmPassword) {
      return {
        code: 200,
        error: { message: "Password and confirm password is not matched !" },
      };
    }

    const userData = {
      email,
      password,
      birthday: moment(birthday, ["DD-MM-YYYY", "DD/MM/YYYY"]).unix() * 1000,
    };

    const userDb = new Users(userData);
    userDb.setUsername();
    await userDb.setPassword(userData.password);
    await userDb.save();

    return {
      code: 200,
      data: userDb.toAuthJSON(),
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = createUser;
