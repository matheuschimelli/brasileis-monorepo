"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManytokensInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let UserCreateManytokensInput = class UserCreateManytokensInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreateManytokensInput.prototype, "set", void 0);
UserCreateManytokensInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateManytokensInput", {
        isAbstract: true
    })
], UserCreateManytokensInput);
exports.UserCreateManytokensInput = UserCreateManytokensInput;
