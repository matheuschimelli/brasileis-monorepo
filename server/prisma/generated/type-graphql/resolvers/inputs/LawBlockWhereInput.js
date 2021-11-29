"use strict";
var LawBlockWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyRelationFilter_1 = require("../inputs/BlockPropertyRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumBlockTypeFilter_1 = require("../inputs/EnumBlockTypeFilter");
const LawBlockListRelationFilter_1 = require("../inputs/LawBlockListRelationFilter");
const LawBlockRelationFilter_1 = require("../inputs/LawBlockRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LawBlockWhereInput = LawBlockWhereInput_1 = class LawBlockWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LawBlockWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFilter_1.EnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFilter_1.EnumBlockTypeFilter)
], LawBlockWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockListRelationFilter_1.LawBlockListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockListRelationFilter_1.LawBlockListRelationFilter)
], LawBlockWhereInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyRelationFilter_1.BlockPropertyRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyRelationFilter_1.BlockPropertyRelationFilter)
], LawBlockWhereInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], LawBlockWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], LawBlockWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockRelationFilter_1.LawBlockRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockRelationFilter_1.LawBlockRelationFilter)
], LawBlockWhereInput.prototype, "LawBlock", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], LawBlockWhereInput.prototype, "lawBlockId", void 0);
LawBlockWhereInput = LawBlockWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockWhereInput", {
        isAbstract: true
    })
], LawBlockWhereInput);
exports.LawBlockWhereInput = LawBlockWhereInput;
