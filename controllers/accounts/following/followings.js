const following = require("services/relationships/following");

const followingController = async (req, res) => {
  const result = await following({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = followingController;
