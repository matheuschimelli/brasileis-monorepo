"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatetokensInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UserCreatetokensInput = class UserCreatetokensInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreatetokensInput.prototype, "set", void 0);
UserCreatetokensInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreatetokensInput", {
        isAbstract: true
    })
], UserCreatetokensInput);
exports.UserCreatetokensInput = UserCreatetokensInput;
