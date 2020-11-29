const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");

const { model } = mongoose;
const { hash } = bcrypt;
const { emailRegex, saltBcrypt } = require("../config");

const createUser = async ({ infoUser }) => {
  try {
    const { email, password, confirmPassword, birthday } = infoUser;

    //check email
    const isEmail = emailRegex.test(email);
    if (!isEmail) {
      return {
        code: 404,
        error: { message: "You need to fill email !" },
      };
    }
    // check password and confirm password is matched
    if (password !== confirmPassword) {
      return {
        code: 404,
        error: { message: "Password and confirm password is not matched !" },
      };
    }
    // hash password
    let hashPassword = await hash(password, saltBcrypt);
    // info user before save in database
    const userData = {
      email,
      password: hashPassword,
      birthday: moment(birthday, "x")
    };
    // create and get info user in database
    const created = await model("users").create(userData);

    return {
      code: 200,
      data: created,
    };
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = createUser;
