const unfollowing = require("_services/relationships/unfollowing");

const unfollowControllers = async (req, res) => {
  const result = await unfollowing({
    userId: req.params.userId,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = unfollowControllers;
