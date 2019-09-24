const Sequelize = require('sequelize');
const env = require('./env');

const sequelizeConection = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        paranoid: true,
        underscored: true
    }
});

const sql_db = {};

sql_db.Sequelize = Sequelize;
sql_db.sequelizeConection = sequelizeConection;

// //Models/tables
// sql_db.owners = require('../models/owners.js')(sequelize, Sequelize);
// sql_db.pets = require('../models/pets.js')(sequelize, Sequelize);

// //Relations
// sql_db.pets.belongsTo(sql_db.owners);
// sql_db.owners.hasMany(sql_db.pets);

module.exports = sql_db;
//.then(() => console.log(`· sql sql_db conected to ${sql_dbConfig.name} as ${sql_dbConfig.user}`))

// mysqlConection.connect(err => {

//     if (err) {
//         console.error(err)
//         return;
//     } else {
//         console.log(`· sql sql_db conected to ${database_name}`)
//     }
// })

// module.exports = mysqlConection;
module.exports = sql_db;