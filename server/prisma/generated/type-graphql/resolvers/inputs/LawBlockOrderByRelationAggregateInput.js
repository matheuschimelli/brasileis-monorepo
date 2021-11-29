"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LawBlockOrderByRelationAggregateInput = class LawBlockOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByRelationAggregateInput.prototype, "_count", void 0);
LawBlockOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockOrderByRelationAggregateInput", {
        isAbstract: true
    })
], LawBlockOrderByRelationAggregateInput);
exports.LawBlockOrderByRelationAggregateInput = LawBlockOrderByRelationAggregateInput;
