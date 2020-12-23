const saved = require("_services/images/_save/viewLibrary");

const viewLib = async (req, res) => {
  const result = await saved({ authPayload: req.payload });
  return res.status(result.code).json(result);
};

module.exports = viewLib;
