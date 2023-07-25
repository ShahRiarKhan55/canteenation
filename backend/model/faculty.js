const mg = require("mongoose");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const faculty = new mg.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  room_no: {
    type: Number,
    required: true,
  },
  phone_no: {
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

faculty.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

faculty.methods.generateFacultyToken = async function () {
  try {
    let token = jsonwebtoken.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log("Error", error);
  }
};

const Faculty = mg.model("Faculty", faculty);

module.exports = Faculty;
