const getUser = require("_services/users/getUserInfo");

const getInfo = async (req, res) => {
  try {
    const { email } = req.payload;
    const result = await getUser({ email });
    return res.status(result.code).json(result);
    // return res.json(req.payload);
  } catch (e) {
    return res.status(500).json({
      code: 500,
      error: { message: e.message },
    });
  }
};

module.exports = getInfo;
