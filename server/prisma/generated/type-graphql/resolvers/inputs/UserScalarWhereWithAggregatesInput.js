"use strict";
var UserScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolWithAggregatesFilter_1 = require("../inputs/BoolWithAggregatesFilter");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumUserRoleWithAggregatesFilter_1 = require("../inputs/EnumUserRoleWithAggregatesFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableListFilter_1.StringNullableListFilter)
], UserScalarWhereWithAggregatesInput.prototype, "tokens", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolWithAggregatesFilter_1.BoolWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolWithAggregatesFilter_1.BoolWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "admin", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "googleId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumUserRoleWithAggregatesFilter_1.EnumUserRoleWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumUserRoleWithAggregatesFilter_1.EnumUserRoleWithAggregatesFilter)
], UserScalarWhereWithAggregatesInput.prototype, "role", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
