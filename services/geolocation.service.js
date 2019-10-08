const MongoLib = require('../lib/mongo');
const { geolocationCollectionName } = require('../config/config')

module.exports = class GeolocationService {

    constructor() {
        this.collection = geolocationCollectionName;
        this.mongoDB = new MongoLib();
    }

    async getAll() {
        const data = await this.mongoDB.getAll(this.collection)
        return data ? data : ["found nothing"]
    }

    async getOne(rutaId) {
        const ruta = await this.mongoDB.get(this.collection, rutaId);
        return ruta ? ruta : "not found";
    }

    async create(data) {
        const rutaid = await this.mongoDB.create(this.collection, data);
        return rutaid

    }

    async pushGeo(id, data) {
        const rutaid = await this.mongoDB.pushGeoById(this.collection, id, data);
        return rutaid
    }

}