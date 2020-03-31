"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const continuation_local_storage_1 = __importDefault(require("continuation-local-storage"));
const rootPath = process.cwd();
let modelCount = 0;
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'temp',
    dialect: 'mysql',
    username: 'root',
    password: 'qweR12#$',
    models: [rootPath + '/database/**/*.ts'],
    modelMatch: (filename, member) => {
        if (filename === 'index') {
            return false;
        }
        console.log('modelMatch start', filename, '/', member);
        if (filename === member || filename.split('.')[0] === member) {
            modelCount++;
            return true;
        }
        return false;
    }
});
console.log(`Total ${modelCount} models was created`);
exports.sequelize.authenticate().then(() => {
    process.stdout.write('Connection has been established successfully.');
}).catch((error) => {
    process.stdout.write(`Unable to connect to the database: ${error}`);
});
const TRANSACTION_NAMESPACE = 'sequelize-transaction';
const namespace = continuation_local_storage_1.default.createNamespace(TRANSACTION_NAMESPACE);
exports.sequelize.Sequelize.useCLS(namespace);
function transaction(fn, options = { propagation: 'REQUIRED' }) {
    try {
        if (options.propagation != 'REQUIRED') {
            return exports.sequelize.transaction(() => fn());
        }
        const tx = continuation_local_storage_1.default.getNamespace(TRANSACTION_NAMESPACE).get('transaction');
        return tx ? fn() : exports.sequelize.transaction(() => fn());
    }
    catch (e) {
        return e;
    }
}
exports.transaction = transaction;
