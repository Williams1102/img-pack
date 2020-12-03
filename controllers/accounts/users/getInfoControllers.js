const getUser = require("../../../services/users/getUserInfo");

const getInfo = async (req, res) => {
  try {
    const result = await getUser({ info: req.header });
    res.status(result.code).json(result);
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getInfo;
