const router = require("express").Router();
const { validUser } = require("../middleware/usuarios");
const UserService = require("../services/usuarios.service");
const auth = require("../middleware/auth");

function usuariosApi(app) {
  const userService = new UserService();

  router
    .route("/")
    .post(validUser, async (req, res, next) => {
      try {
        await userService.create(req.body);
        res.status(200).send({ message: "Tamos melos" });
      } catch (err) {
        next(err);
      }
    })
    .get(auth, async (req, res, next) => {
      try {
        const users = await userService.getAll(req.query);
        if (users.length <= 0) return res.status(400).send("user not found");
        res.status(200).send({ message: "Right", data: users });
      } catch (err) {
        next(err);
      }
    });

  router
    .route("/:id")
    .all(auth)
    .post(async (req, res, next) => {
      try {
        const user = await userService.getOne(req.params.id);
        if (!user) return res.status(400).send("user not found");
        res.status(200).send({ message: "Right", data: user });
      } catch (err) {
        next(err);
      }
    })
    .put(async (req, res, next) => {
      try {
        await userService.update(req.params.id, req.body);
        res.status(200).send({ message: "Right" });
      } catch (err) {
        next(err);
      }
    })
    .delete(async (req, res, next) => {
      try {
        await userService.delete(req.params.id);
        res.status(200).send({ message: "Right" });
      } catch (err) {
        next(err);
      }
    });

  app.use("/api/usuarios", router);
}
module.exports = usuariosApi;
