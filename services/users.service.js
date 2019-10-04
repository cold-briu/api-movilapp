const { usersCollectionName } = require('../config/config')
const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');


class UsersService {

    constructor() {
        this.collection = usersCollectionName;
        this.mongoDB = new MongoLib();
    }

    //create
    async registerUser(data) {
        let user = { ...data };
        user.password = await bcrypt.hash(password, 10);
        const userId = await this.mongoDB.create(this.collection, data);
        return userId;
    }

    //read
    async loginUser(email, password) {

    }

    //update
    async changeUserPassword(docId, password) { }

    async updateUser(docId, data) { }

    //delete
    async deleteUser(docId) { }

}

module.exports = UsersService
