"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const UserCreatetokensInput_1 = require("../inputs/UserCreatetokensInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateWithoutPostsInput = class UserCreateWithoutPostsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutPostsInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutPostsInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutPostsInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutPostsInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreatetokensInput_1.UserCreatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreatetokensInput_1.UserCreatetokensInput)
], UserCreateWithoutPostsInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutPostsInput.prototype, "profile", void 0);
UserCreateWithoutPostsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
        isAbstract: true
    })
], UserCreateWithoutPostsInput);
exports.UserCreateWithoutPostsInput = UserCreateWithoutPostsInput;
