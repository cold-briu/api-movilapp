"use strict";
const { port } = require("./config/config");
const path = require("path");
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
  res.status(200).sendFile(path.join(__dirname, "readme.md"));
});

const server = app.listen(port || process.env.port, () => {
  console.log(`App listening on port ${port}`);
  console.log("Press Ctrl+C to quit.");
});

// QUIERO APRENDER A DESACOPLAR UN HDP SOCKET NEIDER!!!
//Que gono*** de chorizo...
const io = require("socket.io")(server);
const GeoService = require("./services/geolocation.service");

io.on("connection", async socket => {
  const geoService = new GeoService();

  const geoid = await geoService.create({
    socketid: socket.id,
    start_timestamp: new Date().getTime(),
    activo: true,
    deltas: []
  });

  socket.on("new-delta", async location => {
    try {
      const geo = await geoService.getOne(geoid);

      geo.deltas.push(location);
      await geoService.update(geoid, { deltas: geo.deltas });
    } catch (err) {
      console.error(err);
    }
  });

  socket.on("disconnect", async () => {
    try {
      await geoService.update(geoid, {
        end_timestamp: new Date().getTime()
      });
    } catch (err) {
      console.error(err);
    }
  });
});

module.exports = app;
