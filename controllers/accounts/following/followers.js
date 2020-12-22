const followers = require("_services/relationships/followers");

const followersController = async (req, res) => {
  const result = await followers({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = followersController;
