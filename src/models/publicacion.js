const { Schema, model } = require('mongoose')
const collectionName = 'publicaciones'

const PublicacionSchema = Schema({

    uid: { //required val
        type: String,
        required: true,
        select: true
    },

    categorias: {
        type: Array,
        required: true
    },

    entidades: {
        type: Array,
        required: true
    },

    esQueja: {
        type: Boolean,
        default: false
    },

    ubicacion: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
    },

    comentarios: {
        type: Array,
        default: []
    },

    foto: {
        type: String,
        default: "no_foto_url"
    },

    video: {
        type: String,
        default: "no_video_url"
    },

    texto: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model(collectionName, PublicacionSchema);
