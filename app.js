"use strict";
const { port } = require("./config/config");
const path = require('path')
const express = require("express");
const cors = require("cors");
const app = express();

const publicacionesRoute = require("./routes/publicaciones.route");
const comentariosRoute = require("./routes/comentarios.route");
const loginRoute = require("./routes/login.route");
const usuariosRoute = require("./routes/usuarios.route");

// middlewares

app.use(express.json()).use(cors());

//strategy
require("./utils/strategies/basic");

//routes
publicacionesRoute(app);
comentariosRoute(app);
loginRoute(app);
usuariosRoute(app);

app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, 'readme.md'));
});



const server = app.listen(port || process.env.port, () => {
  console.log(`App listening on port ${port}`);
  console.log("Press Ctrl+C to quit.");
});



// QUIERO APRENDER A DESACOPLAR UN HDP SOCKET NEIDER!!!

const io = require('socket.io')(server)

console.log('now it`s time to sokete')

io.on('connection', socket => {

  console.log(`··· socket: ${socket.id} has connected`)

  socket.on('new-delta', location => {
    console.log("llegó", location)
  })

  socket.on('disconnect', () => {
    console.log(`!!! socket: ${socket.id} has DISconnected`);
  });
});


module.exports = app;
