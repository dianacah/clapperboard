"use strict";

const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  routePeliculas = require("./routes/peliculas"),
  routeUsuarios = require("./routes/usuarios"),
  app = express(),
  PORT = 3000,
  DB = "clapperboard";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, PATCH"
  );
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
  next();
});

mongoose
  .connect("mongodb://localhost:27017", {
    dbName: DB,
    useNewUrlParser: true
    // user:'',
    //pasword: ''
  })
  .then(() => {
    console.log(`Ingresar a la base de datos <<${DB}>> con exito`);
  })
  .catch(error => {
    console.log(`No hay conexión: ${error}`);
  });

app.use(bodyParser.json());

app.use("/api", routePeliculas);
app.use("/api", routeUsuarios);

app.use((err, req, res, next) => {
  res.status(422).json({ error: err.menssage });
});

app.listen(PORT, () => {
  console.log(`Cuidado, estamos usando el puerto ${PORT}`);
});
