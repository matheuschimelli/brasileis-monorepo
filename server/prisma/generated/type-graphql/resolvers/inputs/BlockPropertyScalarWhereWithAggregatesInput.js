"use strict";
var BlockPropertyScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolWithAggregatesFilter_1 = require("../inputs/BoolWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let BlockPropertyScalarWhereWithAggregatesInput = BlockPropertyScalarWhereWithAggregatesInput_1 = class BlockPropertyScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BlockPropertyScalarWhereWithAggregatesInput.prototype, "lawBlockId", void 0);
BlockPropertyScalarWhereWithAggregatesInput = BlockPropertyScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], BlockPropertyScalarWhereWithAggregatesInput);
exports.BlockPropertyScalarWhereWithAggregatesInput = BlockPropertyScalarWhereWithAggregatesInput;
