const getUser = require("../../../services/users/getUserInfo");

const getInfo = async (req, res) => {
  try {
    const { email } = req.payload;
    const result = await getUser({ email });
    res.status(result.code).json(result);
    // return res.json(req.payload);
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getInfo;
