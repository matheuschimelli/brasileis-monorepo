"use strict";
var LawBlockScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumBlockTypeFilter_1 = require("../inputs/EnumBlockTypeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LawBlockScalarWhereInput = LawBlockScalarWhereInput_1 = class LawBlockScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LawBlockScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumBlockTypeFilter_1.EnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumBlockTypeFilter_1.EnumBlockTypeFilter)
], LawBlockScalarWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], LawBlockScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], LawBlockScalarWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], LawBlockScalarWhereInput.prototype, "lawBlockId", void 0);
LawBlockScalarWhereInput = LawBlockScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockScalarWhereInput", {
        isAbstract: true
    })
], LawBlockScalarWhereInput);
exports.LawBlockScalarWhereInput = LawBlockScalarWhereInput;
