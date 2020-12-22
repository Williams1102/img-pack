const getUser = require("_services/users/infoUser");

const getInfo = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUser({ userId: userId });
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
