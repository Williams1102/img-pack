const viewAll = require("_services/images/viewPubImage");

const viewAllController = async (req, res) => {
  const result = await viewAll({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = viewAllController;
