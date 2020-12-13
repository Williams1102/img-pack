const getUser = require("../../../services/users/getUserInfo");

const getInfo = async (req, res) => {
  try {
    // const result = await getUser({ token: req.header });
    // res.status(result.code).json(result);
    return res.json(req.payload);
  } catch (e) {
    return {
      code: 500,
      error: { message: e.message },
    };
  }
};

module.exports = getInfo;
