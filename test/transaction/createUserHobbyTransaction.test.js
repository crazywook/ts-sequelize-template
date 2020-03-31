"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sequelize_1 = require("../../persistence/sequelize");
const index_1 = require("./../../repository/user/index");
describe('createUserHobbyTransaction.test', () => {
    before('before', () => {
    });
    after('after', () => {
        sequelize_1.sequelize.close();
    });
    it('When on transacting to create user error was thrown, creating user is rollbacked', async () => {
        await sequelize_1.transaction(async () => {
            console.log('transaction start');
            const mimi = {
                name: 'mimi',
                birthday: new Date('1979-10-10'),
            };
            await index_1.userRepository.createUser(mimi);
            throw new Error('test transaction');
        }).catch((e) => e);
        const mimi = await index_1.userRepository.retrieveOneByName('mimi');
        chai_1.expect(mimi).to.be.null;
    });
});
