"use strict";

const express = require("express");
const usuariosRoute = express.Router();
const Usuarios = require("../models/usuarios");

//POST
usuariosRoute.post("/usuarios", (req, res, next) => {
  Usuarios.create(req.body)
    .then(Usuarios => {
      res.send(Usuarios);
    })
    .catch(next);
});

//GET

usuariosRoute.get("/usuarios/:email", (req, res, next) => {
  Usuarios.findOne({ email: req.params.email }, (err, usuarioExistente) => {
    if (usuarioExistente !== null) {
      Usuarios.findOne({ email: req.params.email }, req.body)
        .then(() => {
          const usuarios = Usuarios.findOne({ email: req.params.email });
          return usuarios;
        })
        .then(usuarios => {
          res.status(200).send(usuarios);
        })
        .catch(next);
    } else {
      res.json(null);
    }
  });
});

//PUT
usuariosRoute.put("/usuarios/:email", (req, res, next) => {
  Usuarios.findOneAndUpdate({ email: req.params.email }, req.body)
    .then(() => {
      const usuarios = Usuarios.findOne({ email: req.params.email });
      return usuarios;
    })
    .then(usuarios => {
      res.send(usuarios);
    })
    .catch(next);
});

//LLAMANDO
module.exports = usuariosRoute;
