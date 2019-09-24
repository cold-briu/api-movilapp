// 'use strict';
module.exports = (sequelize, DataTypes) => {
    const Publicaciones = sequelize.define('Publicaciones', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        uid: {
            type: DataTypes.STRING,
            required: true
        },
        esQueja: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
            defaultValue: 0
        },
        foto: {
            type: DataTypes.STRING,
            defaultValue: "no_foto"

        },
        video: {
            type: DataTypes.STRING,
            defaultValue: "no_video"
        },
        respondida: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
        // underscored: true,
    });
    return Publicaciones;
};
