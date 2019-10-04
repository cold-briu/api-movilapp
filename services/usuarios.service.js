const MongoLib = require("../lib/mongo");
const bcrypt = require("bcrypt");

class Users {
  constructor() {
    this.collection = "users";
    this.MongoDB = new MongoLib();
  }

  async create({ data }) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const user = await this.MongoDB.create(this.collection, data);
    return user;
  }

  async getAll(query) {
    const users = await this.MongoDB.getAll(this.collection, query);
    return users || ["not found"];
  }

  async getOne(userid) {
    const user = await this.MongoDB.get(this.collection, userid);
    return user;
  }

  async update(userid, data) {
    const user = await this.MongoDB.update(this.collection, userid, data);
    return user;
  }

  async delete(userid) {
    const user = await this.MongoDB.delete(this.collection, userid);
    return user;
  }
}

module.exports = Users;
