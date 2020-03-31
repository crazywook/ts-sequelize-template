"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import '../../persistence/sequelize'
const sequelize_1 = require("../../persistence/sequelize");
const index_1 = require("./../../repository/user/index");
const chai_1 = require("chai");
describe('user.test', () => {
    beforeEach('before', async () => {
        console.log('before test');
    });
    after('after', () => {
        console.log('after test');
        sequelize_1.sequelize.close();
    });
    it('when test', async () => {
        const users = await index_1.userRepository.retrieveUser();
        const hobby = users[0].hobbies.map(d => d.toJSON());
        console.log('users', hobby);
        chai_1.expect(hobby).to.instanceOf(Array);
    });
});
// mocha -r ts-node/register user.test.ts
