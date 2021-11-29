"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdatetokensInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UserUpdatetokensInput = class UserUpdatetokensInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdatetokensInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdatetokensInput.prototype, "push", void 0);
UserUpdatetokensInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdatetokensInput", {
        isAbstract: true
    })
], UserUpdatetokensInput);
exports.UserUpdatetokensInput = UserUpdatetokensInput;
