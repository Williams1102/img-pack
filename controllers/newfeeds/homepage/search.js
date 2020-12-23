const search = require("_services/_other/search");

const searchController = async (req, res) => {
  const result = await search({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = searchController;
