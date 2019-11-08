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

//PUT por id
PeliculasRoute.put("/peliculas/:id", (req, res, next) => {
  console.log("peticion", req, res);
  Peliculas.findOneAndUpdate(req.params, req.body)
    .then(() => {
      const peliculas = Peliculas.findOneAndUpdate(req.params._id, req.body);
      return peliculas;
    })
    .then(peliculas => {
      res.send(peliculas);
    })
    .catch(next);
});

//Delete
PeliculasRoute.delete("/peliculas/:id", (req, res, next) => {
  Peliculas.findOneAndDelete({ _id: req.params.id }).then(peliculas => {
    res.send(peliculas);
  }).catch.next;
});

module.exports = PeliculasRoute;
