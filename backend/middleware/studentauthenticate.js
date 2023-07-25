const jwt = require("jsonwebtoken");
const Student = require("../model/student");

const studentauthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.studentLoginToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootStudent = await Student.findOne({
      id: verifyToken._id,
      " tokens : token ": token,
    });
    if (!rootStudent) {
      throw new Error(" User not Found ");
    }
    req.token = token;
    req.rootStudent = rootStudent;
    req.studentID = rootStudent._id;
    next();
  } catch (err) {
    res.status(401).send(" Unauthorized : No token provided ");
    console.log(err);
  }
};

module.exports = studentauthenticate;
