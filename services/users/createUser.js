const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../../config");
const Users = mongoose.model("users");
const { hash } = bcrypt;
const { emailRegex, SALT_BCRYPT } = config;
const createUser = async ({ infoUser }) => {
  try {
    const { email, password, confirmPassword, age } = infoUser;
    //check email
    const isEmail = emailRegex.test(email);
    if (!isEmail) {
      return {
        code: 200,
        error: { message: "You need to fill email !" },
      };
    }
    

    const userData = {
      email,
      password,
      birthday: moment().subtract(parseInt(age), "years").unix() * 1000,
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
