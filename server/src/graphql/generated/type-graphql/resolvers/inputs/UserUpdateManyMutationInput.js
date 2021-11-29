"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserRoleFieldUpdateOperationsInput_1 = require("../inputs/EnumUserRoleFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdatetokensInput_1 = require("../inputs/UserUpdatetokensInput");
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumUserRoleFieldUpdateOperationsInput_1.EnumUserRoleFieldUpdateOperationsInput)
], UserUpdateManyMutationInput.prototype, "role", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdatetokensInput_1.UserUpdatetokensInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdatetokensInput_1.UserUpdatetokensInput)
], UserUpdateManyMutationInput.prototype, "tokens", void 0);
UserUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateManyMutationInput", {
        isAbstract: true
    })
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
