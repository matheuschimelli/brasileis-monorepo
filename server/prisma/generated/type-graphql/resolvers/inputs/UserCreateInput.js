"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PostCreateNestedManyWithoutUserInput_1 = require("../inputs/PostCreateNestedManyWithoutUserInput");
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const UserCreatetokensInput_1 = require("../inputs/UserCreatetokensInput");
const UserRole_1 = require("../../enums/UserRole");
let UserCreateInput = class UserCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRole_1.UserRole, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreatetokensInput_1.UserCreatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreatetokensInput_1.UserCreatetokensInput)
], UserCreateInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput)
], UserCreateInput.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostCreateNestedManyWithoutUserInput_1.PostCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "posts", void 0);
UserCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateInput", {
        isAbstract: true
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
