"use strict";
var LawBlockScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumBlockTypeWithAggregatesFilter_1 = require("../inputs/EnumBlockTypeWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let LawBlockScalarWhereWithAggregatesInput = LawBlockScalarWhereWithAggregatesInput_1 = class LawBlockScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], LawBlockScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeWithAggregatesFilter_1.EnumBlockTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeWithAggregatesFilter_1.EnumBlockTypeWithAggregatesFilter)
], LawBlockScalarWhereWithAggregatesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], LawBlockScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], LawBlockScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], LawBlockScalarWhereWithAggregatesInput.prototype, "lawBlockId", void 0);
LawBlockScalarWhereWithAggregatesInput = LawBlockScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], LawBlockScalarWhereWithAggregatesInput);
exports.LawBlockScalarWhereWithAggregatesInput = LawBlockScalarWhereWithAggregatesInput;
