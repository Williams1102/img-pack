const following = require("_services/relationships/folllowUser");

const followControllers = async (req, res) => {
  const result = await following({
    userId: req.body.userId,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = followControllers;