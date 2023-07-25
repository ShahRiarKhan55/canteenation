const jwt = require("jsonwebtoken");
const Faculty = require("../model/faculty");

const facultyauthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.facultyLoginToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootFaculty = await Faculty.findOne({
      id: verifyToken._id,
      " tokens : token ": token,
    });
    if (!rootFaculty) {
      throw new Error(" User not Found ");
    }
    req.token = token;
    req.rootFaculty = rootFaculty;
    req.facultyID = rootFaculty._id;
    next();
  } catch (err) {
    res.status(401).send(" Unauthorized : No token provided ");
    console.log(err);
  }
};

module.exports = facultyauthenticate;
