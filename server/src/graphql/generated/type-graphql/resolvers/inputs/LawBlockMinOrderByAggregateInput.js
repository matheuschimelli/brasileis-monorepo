"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LawBlockMinOrderByAggregateInput = class LawBlockMinOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMinOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMinOrderByAggregateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMinOrderByAggregateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMinOrderByAggregateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockMinOrderByAggregateInput.prototype, "lawBlockId", void 0);
LawBlockMinOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockMinOrderByAggregateInput", {
        isAbstract: true
    })
], LawBlockMinOrderByAggregateInput);
exports.LawBlockMinOrderByAggregateInput = LawBlockMinOrderByAggregateInput;
