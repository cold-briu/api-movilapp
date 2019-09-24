const env = {
    PORT: process.env.PORT || 3000,
    DATABASE_NAME: 'movilapp_prueba',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_USERNAME: 'root',
    DATABASE_PASSWORD: '',
    DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgre',
    NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;