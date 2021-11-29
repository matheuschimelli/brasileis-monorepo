"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertySumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BlockPropertySumOrderByAggregateInput = class BlockPropertySumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertySumOrderByAggregateInput.prototype, "year", void 0);
BlockPropertySumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertySumOrderByAggregateInput", {
        isAbstract: true
    })
], BlockPropertySumOrderByAggregateInput);
exports.BlockPropertySumOrderByAggregateInput = BlockPropertySumOrderByAggregateInput;
