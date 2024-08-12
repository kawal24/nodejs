const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
