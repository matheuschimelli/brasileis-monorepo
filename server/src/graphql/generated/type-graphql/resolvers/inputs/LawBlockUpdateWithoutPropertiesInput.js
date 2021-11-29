"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBlockTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumBlockTypeFieldUpdateOperationsInput");
const LawBlockUpdateManyWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateManyWithoutLawBlockInput");
const LawBlockUpdateOneWithoutContentInput_1 = require("../inputs/LawBlockUpdateOneWithoutContentInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LawBlockUpdateWithoutPropertiesInput = class LawBlockUpdateWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFieldUpdateOperationsInput_1.EnumBlockTypeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateManyWithoutLawBlockInput_1.LawBlockUpdateManyWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateManyWithoutLawBlockInput_1.LawBlockUpdateManyWithoutLawBlockInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateOneWithoutContentInput_1.LawBlockUpdateOneWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateOneWithoutContentInput_1.LawBlockUpdateOneWithoutContentInput)
], LawBlockUpdateWithoutPropertiesInput.prototype, "LawBlock", void 0);
LawBlockUpdateWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockUpdateWithoutPropertiesInput);
exports.LawBlockUpdateWithoutPropertiesInput = LawBlockUpdateWithoutPropertiesInput;
