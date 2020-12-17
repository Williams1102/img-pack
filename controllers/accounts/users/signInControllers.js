const passport = require("passport");

const createUserControllers = async (req, res, next) => {
  try {
    if (req.body.username) req.body.email = req.body.username;
    // console.log(req.body);
    passport.authenticate("local", { session: false }, (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return res.status(400).json(info);
    })(req, res, next);
  } catch (e) {
    return res.status(500).json({ error: { message: e.message } });
  }
};

module.exports = createUserControllers;
