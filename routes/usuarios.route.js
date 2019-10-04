const router = require("express").Router();
const { validUser } = require("../middleware/usuarios");
const UserService = require("../services/usuarios.service");

router
  .route("/usuarios")
  .post(validUser, (req, res, next) => {
    try {
      new UserService().create(req.body);
      res.status(200).send({ message: "Tamos melos" });
    } catch (err) {
      next(err);
    }
  })
  .get((req, res, next) => {
    try {
      const users = new UserService().getAll(req.query);
      if (users.length <= 0) return res.status(400).send("user not found");
      res.status(200).send({ message: "Right", data: users });
    } catch (err) {
      next(err);
    }
  });

router
  .route("/usuarios/:id")
  .post((req, res, next) => {
    try {
      const user = new UserService().getOne(req.params.id);
      if (!user) return res.status(400).send("user not found");
      res.status(200).send({ message: "Right", data: user });
    } catch (err) {
      next(err);
    }
  })
  .put((req, res, next) => {
    try {
      new UserService().update(req.params.id, req.body);
      res.status(200).send({ message: "Right" });
    } catch (err) {
      next(err);
    }
  })
  .delete((req, res, next) => {
    try {
      new UserService().delete(req.params.id);
      res.status(200).send({ message: "Right" });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
