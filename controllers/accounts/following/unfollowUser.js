const unfollowing = require("_services/relationships/unfollowing");

const unfollowControllers = async (req, res) => {
  const result = await unfollowing({
    userId: req.body.userId,
    authPayload: req.payload,
  });
  return result.status(result.code).jso0n(result);
};

module.exports = unfollowControllers;