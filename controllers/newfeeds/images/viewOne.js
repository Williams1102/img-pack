const viewOneImage = require("services/images/viewOneImage");

const createImageController = async (req, res) => {
  const result = await viewOneImage({
    imageId: req.params.imageId,
  });
  return res.status(result.code).json(result);
};

module.exports = createImageController;
