const Publicacion = require('../models/publicacion.model')

// C

exports.create = async (req, res) => {
    const newPublicacion = Publicacion(req.body)
    try {
        await newPublicacion.save();
        res.status(200)
        res.json({
            status: 200,
            msj: 'Se agregó un nuevo post'
        });
    } catch (error) {
        console.error("error on createPublicacion", error);
    }
}

// R

exports.read = async (req, res) => {
    try {
        const data = await Publicacion.find({});
        res.json(data);
    } catch (error) {
        console.error("error on Publicacion read", error);
    }
}

// U

exports.update = async (req, res) => {
    try {
        await Publicacion.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedPublicacion) =>
                res.json({ updatedPublicacion })
        );
    } catch (err) {
        console.error("error on Publicacion update", err);
    }
}

// D

exports.delete = async (req, res) => {
    try {
        await Publicacion.remove({ _id: req.params.id })
        res.json({ mesaje: `Deleted ${req.params.id}` })
    } catch{
        console.log("error on Publicacion delete", err);

    }

}


exports.findOne = async (req, res) => {
    try {
        const data = await Publicacion.findOne({ _id: req.params.id });
        res.json(data);
    } catch (error) {
        console.error("error on findOne", error);
    }
}

exports.findByUser = async (req, res) => {
    try {
        const data = await Publicacion.find({ uid: req.params.id });
        res.json(data);
    } catch (error) {
        console.error("error on findByUser", error);
    }
}

exports.addMany = async (req, res) => {
    try {
        await Publicacion.collection.insertMany(req.body)
        res.status(200)
        res.json({
            status: 200,
            msj: `se agregaron ${req.body.length} publicaciones`
        });
    } catch (error) {
        console.error("error on add many", error);
    }
}