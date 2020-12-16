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
          const tf = await user.validatePassword(password);
          if (!user || !tf) {
            return done(null, false, { errors: { "email or password": "is invalid" } });
          }

          return done(null, user);
        })
        .catch(done);
    },
  ),
);
