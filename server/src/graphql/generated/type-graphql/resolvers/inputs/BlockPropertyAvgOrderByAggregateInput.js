"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BlockPropertyAvgOrderByAggregateInput = class BlockPropertyAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyAvgOrderByAggregateInput.prototype, "year", void 0);
BlockPropertyAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyAvgOrderByAggregateInput", {
        isAbstract: true
    })
], BlockPropertyAvgOrderByAggregateInput);
exports.BlockPropertyAvgOrderByAggregateInput = BlockPropertyAvgOrderByAggregateInput;
