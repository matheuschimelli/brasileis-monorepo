"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCountAggregate_1 = require("../outputs/UserCountAggregate");
const UserMaxAggregate_1 = require("../outputs/UserMaxAggregate");
const UserMinAggregate_1 = require("../outputs/UserMinAggregate");
const UserRole_1 = require("../../enums/UserRole");
let UserGroupBy = class UserGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserGroupBy.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserGroupBy.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserGroupBy.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCountAggregate_1.UserCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCountAggregate_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserMinAggregate_1.UserMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserMinAggregate_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserMaxAggregate_1.UserMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserMaxAggregate_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("UserGroupBy", {
        isAbstract: true
    })
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
