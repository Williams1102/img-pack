const createUser = require("_services/users/createUser");

const createUserControllers = async (req, res) => {
  try {
    const result = await createUser({ infoUser: req.body });
    return res.status(result.code).json(result);
  } catch (e) {
    return res.status(500).json({
      code: 500,
      error: { message: e.message },
    });
  }
};

module.exports = createUserControllers;
