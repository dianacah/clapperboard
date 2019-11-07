"use strict";

const express = require("express");
const usuariosRoute = express.Router();
const Usuarios = require("../modelos/usuarios");

//POST
usuariosRoute.post("/usuarios", (req, res, next) => {
  Usuarios.create(req.body)
    .then(Usuarios => {
      res.send(Usuarios);
    })
    .catch(next);
});
