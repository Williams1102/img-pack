const trendingUser = require("services/users/trendingUSers");

const trendingUserController = async (req, res) => {
  const result = await trendingUser({});
  return res.status(result.code).json(result);
};

module.exports = trendingUserController;
