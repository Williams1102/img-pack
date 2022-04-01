const following = require("services/relationships/followUsers");

const followControllers = async (req, res) => {
  const result = await following({
    userId: req.params.userId,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = followControllers;
