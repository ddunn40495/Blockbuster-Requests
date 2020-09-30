// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// =======================================
//              MIDDLEWARE
// =======================================
require("dotenv").config();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// )

// =======================================
//              DATABASE
// =======================================
const port = process.env.PORT || 3004;
const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;
const dbName = process.env.DBNAME;

// =======================================
//      MONGOOSE CONNECTION LOGIC
// =======================================
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);
db.once("open", () => {
  console.log("mongo connected: ", dbName);
});
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("disconnected", () => console.log("mongo disconnected"));
// =======================================
//          CONTROLLERS
// =======================================
const requestController = require("./controllers/request_controller.js");
app.use("/blockbuster/requests", requestController);

// =======================================
//              ROUTES
// =======================================

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
