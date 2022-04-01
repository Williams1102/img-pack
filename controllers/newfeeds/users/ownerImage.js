const viewYourImages = require("services/images/showYourImages");

const createImageController = async (req, res) => {
  const result = await viewYourImages({
    userId: req.params.userId,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = createImageController;
