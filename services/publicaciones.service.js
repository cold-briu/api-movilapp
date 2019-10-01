const MongoLib = require('../lib/mongo');

class PublicacionesService {

    constructor() {
        this.collection = 'publicaciones';
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
        const createPublicacionId = await this.mongoDB.create(this.collection, data);

        return createPublicacionId;
    }

    async createMany({ data }) {
        const createPublicacionId = await this.mongoDB.createMany(this.collection, data);

        return createPublicacionId;
    }

    async updateOne(docId, data) {

        const updatePublicacionId = await this.mongoDB.update(this.collection,
            docId,
            data
        );

        return updatePublicacionId;
    }

    async deleteOne(docId) {
        const deletedPublicacionId = await this.mongoDB.delete(
            this.collection,
            docId
        );

        return deletedPublicacionId;
    }

}

module.exports = PublicacionesService;