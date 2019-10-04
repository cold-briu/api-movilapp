const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
const config = require("../../config/config");
const { validateLogin } = require("../validations/user");
const UserService = require("../../services/usuarios.service");
const bcrypt = require("bcrypt");

passport.use(
  new Strategy(
    {
      secretOrKey: config.authSecretKey,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        done(null, token);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const { error } = validateLogin({ email, password });
        if (error)
          return done(null, false, { message: error.details[0].message });

        const user = new UserService().getAll({ tags: { email, password } });
        if (!user)
          return done(null, false, { message: "email or password is wrong" });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword)
          return done(null, false, { message: "email or password is wrong" });

        done(null, user, { message: "Right" });
      } catch (err) {
        return done(err);
      }
    }
  )
);
