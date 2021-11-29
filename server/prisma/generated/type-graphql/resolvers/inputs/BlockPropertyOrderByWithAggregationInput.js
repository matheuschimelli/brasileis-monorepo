"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyAvgOrderByAggregateInput_1 = require("../inputs/BlockPropertyAvgOrderByAggregateInput");
const BlockPropertyCountOrderByAggregateInput_1 = require("../inputs/BlockPropertyCountOrderByAggregateInput");
const BlockPropertyMaxOrderByAggregateInput_1 = require("../inputs/BlockPropertyMaxOrderByAggregateInput");
const BlockPropertyMinOrderByAggregateInput_1 = require("../inputs/BlockPropertyMinOrderByAggregateInput");
const BlockPropertySumOrderByAggregateInput_1 = require("../inputs/BlockPropertySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BlockPropertyOrderByWithAggregationInput = class BlockPropertyOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyOrderByWithAggregationInput.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCountOrderByAggregateInput_1.BlockPropertyCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCountOrderByAggregateInput_1.BlockPropertyCountOrderByAggregateInput)
], BlockPropertyOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyAvgOrderByAggregateInput_1.BlockPropertyAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyAvgOrderByAggregateInput_1.BlockPropertyAvgOrderByAggregateInput)
], BlockPropertyOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMaxOrderByAggregateInput_1.BlockPropertyMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMaxOrderByAggregateInput_1.BlockPropertyMaxOrderByAggregateInput)
], BlockPropertyOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMinOrderByAggregateInput_1.BlockPropertyMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMinOrderByAggregateInput_1.BlockPropertyMinOrderByAggregateInput)
], BlockPropertyOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertySumOrderByAggregateInput_1.BlockPropertySumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertySumOrderByAggregateInput_1.BlockPropertySumOrderByAggregateInput)
], BlockPropertyOrderByWithAggregationInput.prototype, "_sum", void 0);
BlockPropertyOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyOrderByWithAggregationInput", {
        isAbstract: true
    })
], BlockPropertyOrderByWithAggregationInput);
exports.BlockPropertyOrderByWithAggregationInput = BlockPropertyOrderByWithAggregationInput;
