// =======================================
//
//          REQUEST CONTROLLER
//
// =======================================

// =========================
//       DEPENDENCIES
// =========================
const express = require("express");
const requests = express.Router();
const Request = require("../models/request");

// const isAuthenticated = (req, res, next) => {
//     if (req.session.currentUser) {
//       return next()
//     } else {
//       res.redirect('/sessions/new')
//     }
//   }

// =========================
//      ROUTES
// =========================

/* ===========
POST ROUTE
============= */
//CREATE REQUEST
requests.post("/", async (req, res) => {
  try {
    const request = await Request.create(req.body);
    console.log(
      `This is the request you just created ==================================${request}================================================`
    );
    res.redirect("/blockbuster/requests");
  } catch (error) {
    res.send(error);
  }
});

/* ===========
GET ROUTE
============= */
//INDEX REQUEST
requests.get("/", (req, res) => {
  Request.find({}, (err, foundRequests) => {
    res.json(foundRequests);
  });
});

/* ===========
PUT ROUTE
============= */
//UPDATE REQUEST
requests.put("/:id", (req, res) => {
  Request.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedRequest) => {
      if (error) {
        res.send(error);
      } else {
        Request.find({}, (err, foundRequests) => {
          res.json(foundRequests);
        });
      }
    }
  );
});

/* ===========
DELETE ROUTE
============= */
//DELETE REQUEST
requests.delete("/:id", async (req, res) => {
  try {
    await Request.findByIdAndRemove(req.params.id);
    res.redirect("/blockbuster/requests");
  } catch (error) {
    res.send(error);
  }
});

module.exports = requests;
