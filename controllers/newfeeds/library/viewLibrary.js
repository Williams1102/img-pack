const saved = require("services/images/save/viewLibrary");

const viewLib = async (req, res) => {
  const result = await saved({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = viewLib;
