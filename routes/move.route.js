const router = require("express").Router();
const UserService = require("../services/usuarios.service");

module.exports = function(app) {
  app.use("/api/move", router);

  const userService = new UserService();

  router
    .route("/:id")
    .get(async (req, res, next) => {
      try {
        const data = await userService.getOne(req.params.id);
        res.status(200).send(data.move);
      } catch (err) {
        next(err);
      }
    })
    .put(async (req, res, next) => {
      try {
        await userService.updateMoves(req.params.id, req.body);
        res.status(200).send({ message: "updated moves" });
      } catch (err) {
        next(err);
      }
    });
};
