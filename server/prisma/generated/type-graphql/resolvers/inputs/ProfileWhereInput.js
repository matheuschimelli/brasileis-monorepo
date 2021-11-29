"use strict";
var ProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProfileWhereInput = ProfileWhereInput_1 = class ProfileWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProfileWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProfileWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ProfileWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ProfileWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProfileWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], ProfileWhereInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], ProfileWhereInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], ProfileWhereInput.prototype, "User", void 0);
ProfileWhereInput = ProfileWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileWhereInput", {
        isAbstract: true
    })
], ProfileWhereInput);
exports.ProfileWhereInput = ProfileWhereInput;
