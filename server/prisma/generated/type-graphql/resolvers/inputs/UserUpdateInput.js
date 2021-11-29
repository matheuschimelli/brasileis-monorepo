"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutUserInput_1 = require("../inputs/PostUpdateManyWithoutUserInput");
const ProfileUpdateOneWithoutUserInput_1 = require("../inputs/ProfileUpdateOneWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdatetokensInput_1 = require("../inputs/UserUpdatetokensInput");
let UserUpdateInput = class UserUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput)
], UserUpdateInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdatetokensInput_1.UserUpdatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdatetokensInput_1.UserUpdatetokensInput)
], UserUpdateInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserInput_1.ProfileUpdateOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProfileUpdateOneWithoutUserInput_1.ProfileUpdateOneWithoutUserInput)
], UserUpdateInput.prototype, "profile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutUserInput_1.PostUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateManyWithoutUserInput_1.PostUpdateManyWithoutUserInput)
], UserUpdateInput.prototype, "posts", void 0);
UserUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateInput", {
        isAbstract: true
    })
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
