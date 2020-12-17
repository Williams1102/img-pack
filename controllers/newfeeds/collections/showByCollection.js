const viewAllByCollection = require("_services/images/showByCollection");

const createImageController = async (req, res) => {
  const result = await viewAllByCollection({
    collectionId: req.params.collectionId,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = createImageController;
