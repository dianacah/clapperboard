"use strict";

const express = require("express");
const PeliculasRoute = express.Router();
const Peliculas = require("../models/peliculas");

//POST
PeliculasRoute.post("/peliculas", (req, res, next) => {
  Peliculas.create(req.body)
    .then(Peliculas => {
      res.json(Peliculas);
    })
    .catch(next);
});

//GET
PeliculasRoute.get("/peliculas", (req, res, next) => {
  Peliculas.find()
    .then((peliculas) => {
      res.json(peliculas)
    })
    .catch(next);
});

//GET por title
/* PeliculasRoute.get("/peliculas/:title", (req, res, next) => {
  Peliculas.findOne({ title: req.params.title }, (err, peliculasExistente) => {
    if (peliculasExistente !== null) {
      Peliculas.findOne({ title: req.params.title }, req.body)
        .then((peliculas) => {
          res.json(peliculas)
        })
        .catch(next);
    } else {
      res.json(null);
    }
  });
}); */

//GET por genre
PeliculasRoute.get("/peliculas/:genre", (req, res, next) => {
  Peliculas.findOne({ genre: req.params.genre }, (err, peliculasGeneroExistente) => {
    if (peliculasGeneroExistente !== null) {
      Peliculas.findOne({ genre: req.params.genre }, req.body)
        .then((peliculas) => {
          res.json(peliculas)
        })
        .catch(next);
    } else {
      res.json(null);
    }
  });
});

//PUT por id
PeliculasRoute.put("/peliculas/:id", (req, res, next) => {
  console.log("peticion", req.params, req.body);
  Peliculas.findOneAndUpdate({ _id: req.params.id },
    req.body,
    {
      new: true,
      useFindAndModify: false
    })
    .then(peliculas => {
      res.json(peliculas);
    })
    .catch(next);
});

//PUT por title
// PeliculasRoute.put("/peliculas/:title", (req, res, next) => {
//   console.log("peticion", req, res);
//   Peliculas.findOneAndUpdate(req.params, req.body)
//     .then(() => {
//       const peliculas = Peliculas.findOneAndUpdate(req.params.title, req.body);
//       return peliculas;
//     })
//     .then(peliculas => {
//       res.send(peliculas);
//     })
//     .catch(next);
// });

//Delete
/* PeliculasRoute.delete("/peliculas/:id", (req, res, next) => {
  Peliculas.findOneAndDelete({ _id: req.params.id }).then(peliculas => {
    res.send(peliculas);
  }).catch.next;
}); */

//Delete por el title
PeliculasRoute.delete("/peliculas/:title", (req, res, next) => {
  Peliculas.findOneAndDelete({ title: req.params.title }).then(peliculas => {
    res.send(peliculas);
  }).catch.next;
});

module.exports = PeliculasRoute;
