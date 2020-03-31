"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("./UserRepository");
const User_1 = require("./../../database/User");
exports.userRepository = new UserRepository_1.UserRepository(User_1.User);
