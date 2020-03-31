"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hobby_1 = require("../../database/Hobby");
class UserRepository {
    constructor(model) {
        this.model = model;
    }
    retrieveUser() {
        return this.model.findAll({
            include: [Hobby_1.Hobby]
        });
    }
    retrieveOneByName(name) {
        return this.model.findOne({
            include: [Hobby_1.Hobby],
            where: {
                name
            }
        });
    }
    createUser(user) {
        return this.model.create(user);
    }
}
exports.UserRepository = UserRepository;
