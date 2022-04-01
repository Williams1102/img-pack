const saved = require("services/images/save/savedImage");

const saveToLib = async (req, res) => {
  const result = await saved({ imageId: req.params.imageId, authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = saveToLib;
