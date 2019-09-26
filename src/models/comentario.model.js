const { Schema, model } = require('mongoose')
const collectionName = 'comentario'

const ComentarioSchema = Schema({

    uid: { //required val
        type: String,
        required: true,
        select: true
    },

    postid: { //required val
        type: String,
        required: true,
        select: true
    },

    ubicacion: {
        type: String,
        required: true
    },

    likes: {
        type: Number,
        default: 0
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

module.exports = model(collectionName, ComentarioSchema);
