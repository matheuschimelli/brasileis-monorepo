"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutProfileInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutUserInput_1 = require("../inputs/PostUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdatetokensInput_1 = require("../inputs/UserUpdatetokensInput");
let UserUpdateWithoutProfileInput = class UserUpdateWithoutProfileInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput)
], UserUpdateWithoutProfileInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdatetokensInput_1.UserUpdatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdatetokensInput_1.UserUpdatetokensInput)
], UserUpdateWithoutProfileInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutUserInput_1.PostUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PostUpdateManyWithoutUserInput_1.PostUpdateManyWithoutUserInput)
], UserUpdateWithoutProfileInput.prototype, "posts", void 0);
UserUpdateWithoutProfileInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithoutProfileInput", {
        isAbstract: true
    })
], UserUpdateWithoutProfileInput);
exports.UserUpdateWithoutProfileInput = UserUpdateWithoutProfileInput;
