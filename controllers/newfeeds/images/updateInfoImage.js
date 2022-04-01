const updateinfo = require("services/images/updateImage");

const updateImgController = async (req, res) => {
  const result = await updateinfo({
    imageId: req.params.imageId,
    imageInfo: req.body,
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = updateImgController;
