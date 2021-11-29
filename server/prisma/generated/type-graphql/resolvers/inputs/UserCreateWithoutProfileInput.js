"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const UserCreatetokensInput_1 = require("../inputs/UserCreatetokensInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutProfileInput = class UserCreateWithoutProfileInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutProfileInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutProfileInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutProfileInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutProfileInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreatetokensInput_1.UserCreatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreatetokensInput_1.UserCreatetokensInput)
], UserCreateWithoutProfileInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateWithoutProfileInput.prototype, "posts", void 0);
UserCreateWithoutProfileInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutProfileInput", {
        isAbstract: true
    })
], UserCreateWithoutProfileInput);
exports.UserCreateWithoutProfileInput = UserCreateWithoutProfileInput;
