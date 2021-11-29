"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserRole_1 = require("../enums/UserRole");
const UserCount_1 = require("../resolvers/outputs/UserCount");
let User = class User {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], User.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCount_1.UserCount, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCount_1.UserCount)
], User.prototype, "_count", void 0);
User = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("User", {
        isAbstract: true
    })
], User);
exports.User = User;
