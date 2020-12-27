const info = require("_services/relationships/countFollowing");

const infoUserControllers = async (req, res) => {
  const result = await info({ userId: req.params.userId, authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = infoUserControllers;
