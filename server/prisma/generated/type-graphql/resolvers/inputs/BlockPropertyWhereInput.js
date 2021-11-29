"use strict";
var BlockPropertyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const LawBlockRelationFilter_1 = require("../inputs/LawBlockRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let BlockPropertyWhereInput = BlockPropertyWhereInput_1 = class BlockPropertyWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], BlockPropertyWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], BlockPropertyWhereInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFilter_1.BoolFilter)
], BlockPropertyWhereInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], BlockPropertyWhereInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], BlockPropertyWhereInput.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockRelationFilter_1.LawBlockRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockRelationFilter_1.LawBlockRelationFilter)
], BlockPropertyWhereInput.prototype, "LawBlock", void 0);
BlockPropertyWhereInput = BlockPropertyWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyWhereInput", {
        isAbstract: true
    })
], BlockPropertyWhereInput);
exports.BlockPropertyWhereInput = BlockPropertyWhereInput;
