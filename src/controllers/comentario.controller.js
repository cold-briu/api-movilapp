const Comentario = require('../models/comentario.model')

// C

exports.create = async (req, res) => {
    const newComentario = Comentario(req.body)
    try {
        await newComentario.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo post'
        });
    } catch (error) {
        console.error("error on createComentario", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Comentario.find({});
        res.json(data);
    } catch (error) {
        console.error("error on Comentario read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Comentario.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedComentario) =>
                res.json({ updatedComentario })
        );
    } catch (err) {
        console.error("error on Comentario update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Comentario.remove({ orderId: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on Comentario delete", err);

    }

}
