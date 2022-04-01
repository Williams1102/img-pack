const deleteImage = require("services/images/deleteImage");

const delImageController = async (req, res) => {
  const result = await deleteImage({ authPayload: req.payload, imageId: req.params.imageId });
  return res.status(result.code).json(result);
};

module.exports = delImageController;
