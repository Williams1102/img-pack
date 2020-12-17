const updateUser = require("_services/users/updateUser");

const updateInfo = async (req, res) => {
  try {
    // return res.json(req.payload);
    console.log(req.body);
    const result = await updateUser({ info: req.body, authPayload: req.payload });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: { message: e.message } });
  }
};

module.exports = updateInfo;
