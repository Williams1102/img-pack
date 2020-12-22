const viewlist = require("_services/relationships/allUser");

const viewUsersControllers = async (req, res) => {
  const result = await viewlist({
    authPayload: req.payload,
  });
  return res.status(result.code).json(result);
};

module.exports = viewUsersControllers;
