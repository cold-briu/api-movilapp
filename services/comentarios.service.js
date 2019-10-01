const MongoLib = require('../lib/mongo');

class ComentariosService {

    constructor() {
        this.collection = 'comentarios';
        this.mongoDB = new MongoLib();
    }

    async getAll({ tags }) {
        const query = tags && { $in: { tags } }
        const data = await this.mongoDB.getAll(this.collection, query)
        return data || ["not found"]
    }

    async getOne(productId) {
        const product = await this.mongoDB.get(this.collection, productId);

        return product || "not found";
    }

    async createOne({ data }) {
        const createComentarioId = await this.mongoDB.create(this.collection, data);

        return createComentarioId;
    }

    async createMany({ data }) {
        const createComentarioId = await this.mongoDB.createMany(this.collection, data);

        return createComentarioId;
    }

    async updateOne(docId, data) {
        const updateComentarioId = await this.mongoDB.update(this.collection,
            docId,
            data
        );

        return updateComentarioId;
    }

    async deleteOne(docId) {
        const deletedComentarioId = await this.mongoDB.delete(
            this.collection,
            docId
        );

        return deletedComentarioId;
    }

}

module.exports = ComentariosService;