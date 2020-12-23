const saved = require("_services/images/_save/savedImage");

const saveToLib = async (req, res) => {
  const result = await saved({ imageId: req.params.imageId, authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = saveToLib;
