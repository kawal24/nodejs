// // // Middleware to hash password before saving
// // userSchema.pre("save", async function (next) {
// //   if (this.isModified("password") || this.isNew) {
// //     try {
// //       const salt = await bcrypt.genSalt(SALT_ROUNDS);
// //       this.password = await bcrypt.hash(this.password, salt);
// //       next();
// //     } catch (err) {
// //       next(err);
// //     }
// //   } else {
// //     next();
// //   }
// // });

// // module.exports = mongoose.model("User", userSchema);

// const express = require("express");
// const cors = require("cors");
// const usersRouter = require("./src/routes/user");
// const mongoose = require("mongoose");
// const app = express();
// const port = 8000;

// // CORS Configuration
// let corsOptions = { origin: "http://localhost:3000" }; // Update the origin to match your client app's port if it's different
// app.use(cors(corsOptions));

// // Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://kawaljit:5ymVFFvrSRz25QWk@cluster0.qelonsb.mongodb.net/test", // test database name (any name)
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log("err", err));

// // Middleware
// app.use(express.json());
// app.use("users", usersRouter);

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res
//     .status(500)
//     .send({ message: "Internal Server Error", error: err.message });
// });

// // Start the Server
// app.listen(port, () => console.log(`server is running on ${port}`));
