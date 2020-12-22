const info = require("_services/relationships/countFollowing");

const infoUserControllers = async (req, res) => {
  const result = await info({ userId: req.params.userId });
  return res.status(result.code).json(result);
};

module.exports = infoUserControllers;
