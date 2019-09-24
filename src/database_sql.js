// const Sequelize = require('sequelize');
// const env = require('./env');

// const sequelizeConection = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
//     host: env.DATABASE_HOST,
//     port: env.DATABASE_PORT,
//     dialect: env.DATABASE_DIALECT,
//     define: {
//         paranoid: true,
//         underscored: true
//     }
// });

// const sql_db = {};

// sql_db.sequelizeConection = sequelizeConection;
// sql_db.Sequelize = Sequelize;

// //Models
// sql_db.publicaciones = require('../models/publicaciones.model.js')(sequelizeConection, Sequelize);

// // sql_db.pets = require('../models/pets.js')(sequelize, Sequelize);

// // //Relations
// // sql_db.publicaciones.belongsTo(sql_db.owners);
// // sql_db.owners.hasMany(sql_db.pets);

// module.exports = sql_db;

