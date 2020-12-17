const viewYourImages = require("_services/images/showYourImages");

const createImageController = async (req, res) => {
  const result = await viewYourImages({
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = createImageController;