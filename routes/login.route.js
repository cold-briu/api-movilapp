const router = require("express").Router();
const passport = require("passport");

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user)
        return next(`An error ocurred${": " + info.message || ""}`);
    } catch (err) {}
  });
});

module.exports = router;
