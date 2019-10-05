require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,

  publicacionesCollectionName: process.env.DB_PUBLICACIONES_COLLECTION,
  comentariosCollectionName: process.env.DB_COMENTARIOS_COLLECTION,
  usersCollectionName: process.env.DB_USERS_COLLECTION,

  cors: process.env.CORS,
  ioPort: process.env.SOCKET_PORT,
  tokenKey: process.env.TOKEN_KEY
};
