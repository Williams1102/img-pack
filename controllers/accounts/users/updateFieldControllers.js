const updateUser = require("../../../services/users/updateUser");

const updateInfo = async (req, res) => {
  try {
    const result = await updateUser({ info: req.body });
    return res.status(result.code).json(result);
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = updateInfo;
