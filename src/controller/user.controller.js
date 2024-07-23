const user = require("../model/user.model");
const created = async (req, res) => {
  try {
    const { firstname, lastname, email, dob, password, address } = req.body;
    const verify = await user.findOne({ email: email });
    if (verify) {
      res.send("email exit");
    }
    const createapi = await user.create({
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
    res.status(500).send(500).send("something went wronng", error);
  }
};
module.exports = { created };
