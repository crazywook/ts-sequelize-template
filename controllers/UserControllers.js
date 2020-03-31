"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var routing_controllers_1 = require("routing-controllers");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype['get user'] = function () {
        return { message: 'This action returns all users' };
    };
    UserController.prototype.getOne = function (id) {
        return 'This action returns user #' + id;
    };
    UserController.prototype.post = function (user) {
        return 'Saving user...';
    };
    UserController.prototype.put = function (id, user) {
        return 'Updating a user...';
    };
    UserController.prototype.remove = function (id) {
        return 'Removing user...';
    };
    __decorate([
        routing_controllers_1.OnUndefined(404),
        routing_controllers_1.Get('/users')
    ], UserController.prototype, "get user");
    __decorate([
        routing_controllers_1.Get('/users/:id'),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "getOne");
    __decorate([
        routing_controllers_1.Post('/users'),
        __param(0, routing_controllers_1.Body())
    ], UserController.prototype, "post");
    __decorate([
        routing_controllers_1.Put('/users/:id'),
        __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body())
    ], UserController.prototype, "put");
    __decorate([
        routing_controllers_1.Delete('/users/:id'),
        __param(0, routing_controllers_1.Param('id'))
    ], UserController.prototype, "remove");
    UserController = __decorate([
        routing_controllers_1.JsonController()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
