const mg = require("mongoose");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const owner = new mg.Schema({
  usercode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_no: {
    type: Number,
    required: true,
  },
  canteen_name: {
    type: String,
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

owner.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

owner.methods.generateOwnerToken = async function () {
  try {
    let token = jsonwebtoken.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log("Error", error);
  }
};

const Owner = mg.model("Owner", owner);

module.exports = Owner;
