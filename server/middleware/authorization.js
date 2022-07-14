const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwToken = req.header("token");
    if (!jwToken) {
      return res.status(403).json("Not Authorized!");
    }

    const verify = jwt.verify(jwToken, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not Authorized!");
  }
};
