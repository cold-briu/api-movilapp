const router = require("express").Router();

const UsersService = require("../services/usuarios.service");
const auth = require("../middleware/auth");
const { checkValidUserData } = require("../middlewares/usuarios");

function usuariosApi(app) {

  app.use("/api/usuarios", router);

  const userService = new UsersService();

  router
    .route("/")
    .post(checkValidUserData, async (req, res, next) => {
      try {
        await userService.register(req.body);
        res.status(200).send({ message: "Tamos melos" });
      } catch (err) {
        next(err);
      }
    })
    .get(auth, async (req, res, next) => {
      try {
        const users = await userService.getAll(req.query);
        if (users.length <= 0) return res.status(400).send("user not found");
        res.status(200).send(users);
      } catch (err) {
        next(err);
      }
    });

  router
    .route("/:id")
    .all(auth)
    .get(async (req, res, next) => {
      try {
        const user = await userService.getOne(req.params.id);
        if (!user) return res.status(400).send("user not found");
        res.status(200).send(user);
      } catch (err) {
        next(err);
      }
    })
    .put(async (req, res, next) => {
      try {
        await userService.update(req.params.id, req.body);
        res.status(200).send({ message: "updated user" });
      } catch (err) {
        next(err);
      }
    })
    .delete(async (req, res, next) => {
      try {
        await userService.delete(req.params.id);
        res.status(200).send({ message: "deleted user" });
      } catch (err) {
        next(err);
      }
    });

}
module.exports = usuariosApi;
