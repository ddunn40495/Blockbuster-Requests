const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    title: { type: String },
    year: { type: Number },
    rated: { type: String },
    genre: { type: String },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
