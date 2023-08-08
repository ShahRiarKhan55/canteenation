const express = require("express");
const bcrypt = require("bcryptjs");
const Student = require("../model/student");
const Faculty = require("../model/faculty");
const Owner = require("../model/owner");
const Category = require("../model/category");
const Order = require("../model/order");
const sendemail = require("../middleware/sendemail");
const router = express.Router();

//------------------------------------STUDENT SIDE--------------------------------------------//
router.post("/student_register", async (req, res) => {
  const { email, studentid, password, cpassword } = req.body;
  console.log("hi");
  if (!email || !studentid || !password || !cpassword) {
    return res.status(422).json("422");
  }

  if (password === cpassword) {
    try {
      const studentExist = await Student.findOne({ email });
      if (studentExist) {
        return res.status(423).json("423");
      }

      const newStudent = new Student({ email, studentid, password });
      await newStudent.save();
      return res.status(200).json("200");
    } catch (err) {
      console.log("Error with", err);
    }
  } else {
    return res.status(425).json("425");
  }
});

router.post("/student_login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("404");
    }

    const studentLogin = await Student.findOne({ email });

    if (studentLogin) {
      const matchpass = await bcrypt.compare(password, studentLogin.password);

      if (matchpass) {
        let token = await studentLogin.generateStudentToken();
        res.cookie("studentLoginToken", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        // return res.send(req.userLogin)
        return res.status(200).json(studentLogin);
      } else {
        return res.status(405).json("405");
      }
    } else {
      return res.status(406).json("406");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/student_logout", (req, res) => {
  res.clearCookie("studentLoginToken", { path: "/" });
  return res.status(200).json("Logged out");
});

//------------------------------------Faculty SIDE--------------------------------------------//
router.post("/faculty_register", async (req, res) => {
  const { name, email, room_no, phone_no, password, cpassword } = req.body;
  console.log("hi");
  if (!name || !email || !room_no || !phone_no || !password || !cpassword) {
    return res.status(422).json("422");
  }

  if (password === cpassword) {
    try {
      const facultyExist = await Faculty.findOne({ email });
      if (facultyExist) {
        return res.status(423).json("423");
      }

      const newFaculty = new Faculty({
        name,
        email,
        room_no,
        phone_no,
        password,
      });
      await newFaculty.save();
      return res.status(200).json("200");
    } catch (err) {
      console.log("Error with", err);
    }
  } else {
    return res.status(425).json("425");
  }
});

router.post("/faculty_login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("404");
    }

    const facultyLogin = await Faculty.findOne({ email });

    if (facultyLogin) {
      const matchpass = await bcrypt.compare(password, facultyLogin.password);

      if (matchpass) {
        let token = await facultyLogin.generateFacultyToken();
        res.cookie("facultyLoginToken", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        return res.status(200).json(facultyLogin);
      } else {
        return res.status(405).json("405");
      }
    } else {
      return res.status(406).json("406");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/faculty_logout", (req, res) => {
  res.clearCookie("facultyLoginToken", { path: "/" });
  return res.status(200).json("Logged out");
});

//------------------------------------Owner SIDE--------------------------------------------//
router.post("/owner_register", async (req, res) => {
  const { usercode, name, email, phone_no, canteen_name, password, cpassword } =
    req.body;

  if (
    !usercode ||
    !name ||
    !email ||
    !phone_no ||
    !canteen_name ||
    !password ||
    !cpassword
  ) {
    return res.status(404).json("Fill the entire form");
  }

  if (password === cpassword) {
    try {
      const ownerExist = await Owner.findOne({ email });
      if (ownerExist) {
        return res.status(422).json("The Owner is already registered");
      }

      const newowner = new Owner({
        usercode,
        name,
        email,
        phone_no,
        canteen_name,
        password,
      });
      await newowner.save();
      res.status(200).json("Successfully Registered");
    } catch (err) {
      console.log("Error with", err);
    }
  } else {
    return res.status(404).json("Password is not matching");
  }
});
router.post("/owner_login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("404");
    }

    const ownerLogin = await Owner.findOne({ email });

    if (ownerLogin) {
      const matchpass = await bcrypt.compare(password, ownerLogin.password);

      if (matchpass) {
        const token = await ownerLogin.generateOwnerToken();
        res.cookie("ownerLoginToken", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        return res.status(200).json("200");
      } else {
        return res.status(405).json("405");
      }
    } else {
      return res.status(406).json("406");
    }
  } catch (err) {
    console.log("Error", err);
  }
});

router.post("/owner_logout", (req, res) => {
  res.clearCookie("ownerLoginToken", { path: "/" });
  return res.status(200).json("Logged out");
});

module.exports = router;

//------------------------------------Add-Category--------------------------------------------//

router.post("/addcategories", async (req, res) => {
  const category = req.body;
  try {
    const newCategory = new Category(category);
    await newCategory.save();
    return res.status(200).json("200");
  } catch (err) {
    return res.status(404).json("404");
  }
});

router.get("/getcategories", async (req, res) => {
  try {
    const cat = await Category.find();
    res.send(JSON.stringify(cat));
  } catch (err) {
    console.log(err);
  }
});

router.post("/deletecategorie", async (req, res) => {
  const { category } = req.body;
  try {
    const cat = await Category.deleteOne({ category: category });
    return res.status(200).json("200");
  } catch (err) {
    return res.status(404).json("404");
  }
});

//------------------------------------ORDER SIDE--------------------------------------------//
router.post("/addOrder", async (req, res) => {
  const {
    order,
    totalprice,
    facultyname,
    facid,
    facultyroom,
    facultyphone,
    paymentStatus,
  } = req.body;
  const orderDate = new Date();
  const orderid = Math.floor(Math.random() * 1000000 + 1);
  const orderStatus = "On Delivery";
  try {
    const newOrder = Order.insertMany({
      order: order.orders,
      orderDate,
      totalprice,
      facultyname,
      facid,
      facultyroom,
      facultyphone,
      paymentStatus,
      orderStatus,
      orderid,
    });
    return res.status(200).json("200");
  } catch (err) {
    return res.status(404).json("404");
  }
});

router.get("/showorders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(JSON.stringify(orders));
  } catch (err) {
    console.log(err);
  }
});

router.post("/updateStatus", async (req, res) => {
  console.log(req.body);
  const { orderStatus, _id, paymentStatus } = req.body;
  try {
    const update = await Order.findByIdAndUpdate(
      { _id },
      {
        $set: {
          orderStatus,
          paymentStatus,
        },
      },
      {
        new: true,
      }
    );
    console.log(update);
    const fac = await Faculty.findById(update.facid);
    if (update.orderStatus === "Done") {
      try {
        const send_to = fac.email;
        const sent_from = process.env.EMAIL_USER;
        const subject = "Your Order Is Ready !! 🍴";
        const message = `
          Hello ${update.facultyname} 
          OrderId : ${update.orderid}
          Your food is ready and served, please take it from the counter.
          Regards , Olympia Cafe 
          `;

        await sendemail(subject, message, send_to, sent_from);
        return res.status(200).json("200");
      } catch (err) {
        return res.status(200).json("400");
      }
    }
    return res.status(200).json("200");
  } catch (err) {
    return res.status(400).json("400");
  }
});

router.post("/showNotification", async (req, res) => {
  const { ishowed, _id } = req.body;
  console.log(ishowed, _id);
  try {
    const update = await Order.findByIdAndUpdate(
      { _id },
      {
        $set: {
          ishowed,
        },
      }
    );
    return res.status(200).json("200");
  } catch (err) {
    return res.status(400).json("400");
  }
});

module.exports = router;
