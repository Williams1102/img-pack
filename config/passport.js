const mongoose = require("mongoose");
const { model } = mongoose;
const passport = require("passport");
const localStrategy = require("passport-local");

const Users = model("users");

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      Users.findOne({ email })
        .then(async (user) => {
          let tf = !!user;
          if (tf) tf = await user.validatePassword(password);
          if (!tf) {
            return done(null, false, { code: 400, error: { "email or password": "is invalid" } });
          }
          return done(null, user);
        })
        .catch(done);
    },
  ),
);
