module.exports = (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('publicaciones', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        uid: {
            type: DataTypes.string(),
            required: true
        },
        esQueja: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        categorias: {
            type: DataTypes.STRING,
            required: true
        },
        entidades: {
            type: DataTypes.STRING,
            required: true
        },
        ubicacion: {
            type: DataTypes.STRING,
            required: true
        },
        texto: {
            type: DataTypes.STRING,
            required: true
        },
        likes: {
            type: DataTypes.INTEGER,
            default: 0
        },
        foto: {
            type: DataTypes.STRING
        },
        video: {
            type: DataTypes.STRING
        },
        respondida: {
            type: DataTypes.BOOLEAN,
            defaul: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        paranoid: true,
        underscored: true

    });
    return Publicacion;
};


// User.sync({ force: true }).then(function () {
//     // Table created
//     return User.create({
//         firstName: 'John',
//         lastName: 'Hancock'
//     });
// });