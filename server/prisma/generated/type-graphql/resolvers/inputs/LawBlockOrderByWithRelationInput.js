"use strict";
var LawBlockOrderByWithRelationInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyOrderByWithRelationInput_1 = require("../inputs/BlockPropertyOrderByWithRelationInput");
const LawBlockOrderByRelationAggregateInput_1 = require("../inputs/LawBlockOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LawBlockOrderByWithRelationInput = LawBlockOrderByWithRelationInput_1 = class LawBlockOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithRelationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockOrderByRelationAggregateInput_1.LawBlockOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockOrderByRelationAggregateInput_1.LawBlockOrderByRelationAggregateInput)
], LawBlockOrderByWithRelationInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyOrderByWithRelationInput_1.BlockPropertyOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyOrderByWithRelationInput_1.BlockPropertyOrderByWithRelationInput)
], LawBlockOrderByWithRelationInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithRelationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithRelationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockOrderByWithRelationInput_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockOrderByWithRelationInput)
], LawBlockOrderByWithRelationInput.prototype, "LawBlock", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockOrderByWithRelationInput.prototype, "lawBlockId", void 0);
LawBlockOrderByWithRelationInput = LawBlockOrderByWithRelationInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockOrderByWithRelationInput", {
        isAbstract: true
    })
], LawBlockOrderByWithRelationInput);
exports.LawBlockOrderByWithRelationInput = LawBlockOrderByWithRelationInput;
