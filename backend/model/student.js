const mg = require("mongoose");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const student = new mg.Schema({
  email: {
    type: String,
    required: true,
  },
  studentid: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

//this acts as the middleware

student.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

student.methods.generateStudentToken = async function () {
  try {
    let token = jsonwebtoken.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log("Error", error);
  }
};

const Student = mg.model("Student", student);

module.exports = Student;
