"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateManytokensInput_1 = require("../inputs/UserCreateManytokensInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateManyInput = class UserCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateManyInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateManyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateManyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateManyInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateManytokensInput_1.UserCreateManytokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateManytokensInput_1.UserCreateManytokensInput)
], UserCreateManyInput.prototype, "tokens", void 0);
UserCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateManyInput", {
        isAbstract: true
    })
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
