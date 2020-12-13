const jwt = require("express-jwt");
const { JWT_KEY } = require("../config");
const getTokenFromHeaders = (req) => {
  const {
    headers: { authorization },
  } = req;
  console.log(authorization);
  if (authorization && authorization.split(" ")[0] === "Token") {
    return authorization.split(" ")[1];
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
