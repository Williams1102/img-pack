const createImage = require("_services/images/createImage");

const createImageController = async (req, res) => {
  const result = await createImage({
    imageInfo: req.body,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = createImageController;
