"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateNestedOneWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateNestedOneWithoutLawBlockInput");
const LawBlockCreateNestedManyWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateNestedManyWithoutLawBlockInput");
const LawBlockCreateNestedOneWithoutContentInput_1 = require("../inputs/LawBlockCreateNestedOneWithoutContentInput");
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateInput = class LawBlockCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedManyWithoutLawBlockInput_1.LawBlockCreateNestedManyWithoutLawBlockInput)
], LawBlockCreateInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateNestedOneWithoutLawBlockInput_1.BlockPropertyCreateNestedOneWithoutLawBlockInput)
], LawBlockCreateInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateNestedOneWithoutContentInput_1.LawBlockCreateNestedOneWithoutContentInput)
], LawBlockCreateInput.prototype, "LawBlock", void 0);
LawBlockCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateInput", {
        isAbstract: true
    })
], LawBlockCreateInput);
exports.LawBlockCreateInput = LawBlockCreateInput;