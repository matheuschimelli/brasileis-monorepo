"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBlockTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumBlockTypeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LawBlockUpdateManyMutationInput = class LawBlockUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LawBlockUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput)
], LawBlockUpdateManyMutationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateManyMutationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateManyMutationInput.prototype, "updatedAt", void 0);
LawBlockUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateManyMutationInput", {
        isAbstract: true
    })
], LawBlockUpdateManyMutationInput);
exports.LawBlockUpdateManyMutationInput = LawBlockUpdateManyMutationInput;
