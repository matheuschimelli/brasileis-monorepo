"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PostSumOrderByAggregateInput = class PostSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostSumOrderByAggregateInput.prototype, "id", void 0);
PostSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostSumOrderByAggregateInput", {
        isAbstract: true
    })
], PostSumOrderByAggregateInput);
exports.PostSumOrderByAggregateInput = PostSumOrderByAggregateInput;
