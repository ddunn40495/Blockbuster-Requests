const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  title: { type: String },
  year: { type: Number },
  rated: { type: Number },
  genre: [String],
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
