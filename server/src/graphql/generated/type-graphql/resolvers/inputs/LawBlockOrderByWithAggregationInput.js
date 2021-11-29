"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCountOrderByAggregateInput_1 = require("../inputs/LawBlockCountOrderByAggregateInput");
const LawBlockMaxOrderByAggregateInput_1 = require("../inputs/LawBlockMaxOrderByAggregateInput");
const LawBlockMinOrderByAggregateInput_1 = require("../inputs/LawBlockMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LawBlockOrderByWithAggregationInput = class LawBlockOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithAggregationInput.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCountOrderByAggregateInput_1.LawBlockCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCountOrderByAggregateInput_1.LawBlockCountOrderByAggregateInput)
], LawBlockOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMaxOrderByAggregateInput_1.LawBlockMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMaxOrderByAggregateInput_1.LawBlockMaxOrderByAggregateInput)
], LawBlockOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockMinOrderByAggregateInput_1.LawBlockMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockMinOrderByAggregateInput_1.LawBlockMinOrderByAggregateInput)
], LawBlockOrderByWithAggregationInput.prototype, "_min", void 0);
LawBlockOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockOrderByWithAggregationInput", {
        isAbstract: true
    })
], LawBlockOrderByWithAggregationInput);
exports.LawBlockOrderByWithAggregationInput = LawBlockOrderByWithAggregationInput;
