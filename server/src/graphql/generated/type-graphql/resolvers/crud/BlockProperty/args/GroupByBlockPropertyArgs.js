"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyOrderByWithAggregationInput_1 = require("../../../inputs/BlockPropertyOrderByWithAggregationInput");
const BlockPropertyScalarWhereWithAggregatesInput_1 = require("../../../inputs/BlockPropertyScalarWhereWithAggregatesInput");
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
const BlockPropertyScalarFieldEnum_1 = require("../../../../enums/BlockPropertyScalarFieldEnum");
let GroupByBlockPropertyArgs = class GroupByBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], GroupByBlockPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyOrderByWithAggregationInput_1.BlockPropertyOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByBlockPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarFieldEnum_1.BlockPropertyScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByBlockPropertyArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyScalarWhereWithAggregatesInput_1.BlockPropertyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyScalarWhereWithAggregatesInput_1.BlockPropertyScalarWhereWithAggregatesInput)
], GroupByBlockPropertyArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByBlockPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByBlockPropertyArgs.prototype, "skip", void 0);
GroupByBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByBlockPropertyArgs);
exports.GroupByBlockPropertyArgs = GroupByBlockPropertyArgs;
