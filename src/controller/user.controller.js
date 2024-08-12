const userSchema = require("../model/user.model");
const { sign } = require("jsonwebtoken");

const created = async (req, res) => {
  try {
    const { firstname, lastname, email, dob, password, address } = req.body;
    console.log(req.body);
    const verify = await userSchema.findOne({ email: email });
    if (verify) {
      return res.send("email exit");
    }
    const createapi = await userSchema.create({
      firstname,
      lastname,
      dob,
      password,
      address,
      // gender,
      email,
    });
    res
      .status(201)
      .send({ message: "user created successfully", data: createapi });
  } catch (error) {
    console.log(error, 12345678);
    res.status(500).json({ message: "something went wronng", error });
  }
};
// module.exports = { created };

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "email & password are required" });
    }
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      res
        .status(404)
        .json({ message: "Please enter correct email and password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const tokenData = sign(
      {
        id: user._id,
        email: user.email,
      },
      "secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({ message: "login successfull", token: token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong in login" });
  }
};
// get user api

const getUser = async (req, res) => {
  try {
    // const user = await user.findById(req.params.id);

    const userdata = await userSchema.find();
    if (!userdata) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json({ message: "User found", data: userdata });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong in getting user", error });
  }
};

// update user api

const updateUser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated", data: user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in updating user" });
  }
};

// delete user api
const deleteUser = async (req, res) => {
  try {
    const user = await userSchema.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in deleting user" });
  }
};

// const getUser = async()=>{}
module.exports = { created, LoginUser, getUser, updateUser, deleteUser };
