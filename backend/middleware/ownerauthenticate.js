const jwt = require("jsonwebtoken");
const Owner = require("../model/owner");

const ownerauthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.ownerLoginToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootOwner = await Owner.findOne({
      id: verifyToken._id,
      " tokens : token ": token,
    });
    if (!rootOwner) {
      throw new Error(" User not Found ");
    }
    req.token = token;
    req.rootOwner = rootOwner;
    req.ownerID = rootOwner._id;
    next();
  } catch (err) {
    res.status(401).send(" Unauthorized : No token provided ");
    console.log(err);
  }
};

module.exports = ownerauthenticate;
