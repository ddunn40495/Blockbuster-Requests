const { request } = require("express");
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
requests.post("/", (req, res) => {
  Request.create(req.body, (err, createdRequest) => {
    console.log(
      `This is the request you just created ==================================${createdRequest}================================================`
    );
    Request.find({}, (err, foundRequests) => {
      res.json(foundRequests);
    });
  });
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
      console.log(
        `This is the request you just updated ==================================${updatedRequest}================================================`
      );
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
requests.delete("/:id", (req, res) => {
  Request.findByIdAndRemove(req.params.id, (err, deletedRequest) => {
    console.log(
      `This is the request you just deleted ==================================${deletedRequest}================================================`
    );
    Request.find({}, (err, foundRequests) => {
      res.json(foundRequests);
    });
  });
});

module.exports = requests;
