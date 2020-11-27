const mongoose = require("mongoose");
const { model } = mongoose;
const passport = require("passport");
const localStrategy = require("passport-local");

const users = model("users");

passport.use(new localStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      return done(null, user);
    }).catch(done);
}));