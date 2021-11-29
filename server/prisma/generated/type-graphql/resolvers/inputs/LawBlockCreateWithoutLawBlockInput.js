"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateNestedOneWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput");
const LawBlockCreateNestedManyWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateNestedManyWithoutLawBlockInput");
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateWithoutLawBlockInput = class LawBlockCreateWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutLawBlockInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateWithoutLawBlockInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutLawBlockInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateWithoutLawBlockInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput)
], LawBlockCreateWithoutLawBlockInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput)
], LawBlockCreateWithoutLawBlockInput.prototype, "properties", void 0);
LawBlockCreateWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockCreateWithoutLawBlockInput);
exports.LawBlockCreateWithoutLawBlockInput = LawBlockCreateWithoutLawBlockInput;
