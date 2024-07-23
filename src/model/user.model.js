const { Schema, default: mongoose } = require("mongoose");

const personschema = new Schema(
  {
    firstname: { type: Schema, Types: String, required: true },
    lastname: { type: Schema, Types: String, required: true },
    dob: { type: Schema, Types: String, required: true },
    email: { type: Schema, Types: String, required: true },
    password: { type: Schema, Types: String, required: true },
    address: { type: Schema, Types: String, required: true },
  },
  { timestamps: true }
);
model.exports = mongoose("person", personschema);
