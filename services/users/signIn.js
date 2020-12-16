const mongoose = require("mongoose");
const { model } = mongoose;
const passport = require("passport");
const signIn = async ({ bodyInfo }) => {
  try {
    return passport.authenticate("local", { session: false }, (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return res.status(400).json(info);
    });
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = signIn;
