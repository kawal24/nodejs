const express = require("express");
const usersRouter = require("./src/routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
port = 8000;
mongoose
  .connect(
    "mongodb+srv://kawaljit:5ymVFFvrSRz25QWk@cluster0.qelonsb.mongodb.net/test"
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("err", err));
app.use(cors());
app.use("/", usersRouter);
app.listen(port, () => console.log(`server is running on ${port}`));
