"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyUpdateOneWithoutLawBlockInput_1 = require("../inputs/BlockPropertyUpdateOneWithoutLawBlockInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBlockTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumBlockTypeFieldUpdateOperationsInput");
const LawBlockUpdateManyWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateManyWithoutLawBlockInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LawBlockUpdateWithoutLawBlockInput = class LawBlockUpdateWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateManyWithoutLawBlockInput_1.LawBlockUpdateManyWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateManyWithoutLawBlockInput_1.LawBlockUpdateManyWithoutLawBlockInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateOneWithoutLawBlockInput_1.BlockPropertyUpdateOneWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateOneWithoutLawBlockInput_1.BlockPropertyUpdateOneWithoutLawBlockInput)
], LawBlockUpdateWithoutLawBlockInput.prototype, "properties", void 0);
LawBlockUpdateWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockUpdateWithoutLawBlockInput);
exports.LawBlockUpdateWithoutLawBlockInput = LawBlockUpdateWithoutLawBlockInput;
