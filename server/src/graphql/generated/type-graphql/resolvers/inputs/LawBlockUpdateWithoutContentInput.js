"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyUpdateOneWithoutLawBlockInput_1 = require("../inputs/BlockPropertyUpdateOneWithoutLawBlockInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBlockTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumBlockTypeFieldUpdateOperationsInput");
const LawBlockUpdateOneWithoutContentInput_1 = require("../inputs/LawBlockUpdateOneWithoutContentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LawBlockUpdateWithoutContentInput = class LawBlockUpdateWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LawBlockUpdateWithoutContentInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutContentInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutContentInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutContentInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateOneWithoutLawBlockInput_1.BlockPropertyUpdateOneWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateOneWithoutLawBlockInput_1.BlockPropertyUpdateOneWithoutLawBlockInput)
], LawBlockUpdateWithoutContentInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateOneWithoutContentInput_1.LawBlockUpdateOneWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateOneWithoutContentInput_1.LawBlockUpdateOneWithoutContentInput)
], LawBlockUpdateWithoutContentInput.prototype, "LawBlock", void 0);
LawBlockUpdateWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateWithoutContentInput", {
        isAbstract: true
    })
], LawBlockUpdateWithoutContentInput);
exports.LawBlockUpdateWithoutContentInput = LawBlockUpdateWithoutContentInput;
