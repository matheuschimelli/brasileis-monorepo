"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateNestedManyWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateNestedManyWithoutLawBlockInput");
const LawBlockCreateNestedOneWithoutContentInput_1 = require("../inputs/LawBlockCreateNestedOneWithoutContentInput");
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateWithoutPropertiesInput = class LawBlockCreateWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutPropertiesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutPropertiesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutPropertiesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutPropertiesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput)
], LawBlockCreateWithoutPropertiesInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput)
], LawBlockCreateWithoutPropertiesInput.prototype, "LawBlock", void 0);
LawBlockCreateWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockCreateWithoutPropertiesInput);
exports.LawBlockCreateWithoutPropertiesInput = LawBlockCreateWithoutPropertiesInput;
