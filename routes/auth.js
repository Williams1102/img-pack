const jwt = require("express-jwt");
const { JWT_KEY } = require("../config");
const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization },
  } = req;
  if (authorization) {
    switch (authorization.split(" ").length) {
      case 2:
        return authorization.split(" ")[1];
      case 1:
        return authorization;
      default:
        break;
    }
  }
  return "";
};

const auth = {
  required: jwt({
    secret: JWT_KEY,
    algorithms: ["HS256"],
    userProperty: "payload",
    getToken: getTokenFromHeaders,
  }),
  optional: jwt({
    secret: JWT_KEY,
    algorithms: ["HS256"],
    userProperty: "payload",
    credentialsRequired: false,
    getToken: getTokenFromHeaders,
  }),
};
module.exports = auth;
