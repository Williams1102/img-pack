const updateUser = require("../../../services/users/updateUser");

const updateInfo = async (req, res) => {
  try {
    
    const result = await updateUser({ info: req.body });
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: { message: e.message } });
  }
};

module.exports = updateInfo;
