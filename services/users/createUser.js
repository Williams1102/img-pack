const mongoose = require("mongoose");
const moment = require("moment");
const bcrypt = require("bcrypt");
const config = require("../../config");

const { model } = mongoose;
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
        code: 404,
        error: { message: "Password and confirm password is not matched !" },
      };
    }

    // check email is exists in database
    const isExists = await model("users").findOne({ email }).lean();
    if (isExists) {
      return {
        code: 400,
        error: { message: "users is existed !" },
      };
    }

    // hash password
    let hashPassword = await hash(password, SALT_BCRYPT);
    // info user before save in database
    const userData = {
      email,
      password: hashPassword,
      birthday: moment(birthday, ["DD-MM-YYYY", "DD/MM/YYYY"]).unix() * 1000,
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
