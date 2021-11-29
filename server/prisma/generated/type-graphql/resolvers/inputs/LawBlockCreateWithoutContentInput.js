"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateNestedOneWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput");
const LawBlockCreateNestedOneWithoutContentInput_1 = require("../inputs/LawBlockCreateNestedOneWithoutContentInput");
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateWithoutContentInput = class LawBlockCreateWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutContentInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutContentInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutContentInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutContentInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput)
], LawBlockCreateWithoutContentInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput)
], LawBlockCreateWithoutContentInput.prototype, "LawBlock", void 0);
LawBlockCreateWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateWithoutContentInput", {
        isAbstract: true
    })
], LawBlockCreateWithoutContentInput);
exports.LawBlockCreateWithoutContentInput = LawBlockCreateWithoutContentInput;
