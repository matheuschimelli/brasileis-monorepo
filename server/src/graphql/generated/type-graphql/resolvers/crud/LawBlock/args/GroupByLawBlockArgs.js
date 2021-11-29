"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockOrderByWithAggregationInput_1 = require("../../../inputs/LawBlockOrderByWithAggregationInput");
const LawBlockScalarWhereWithAggregatesInput_1 = require("../../../inputs/LawBlockScalarWhereWithAggregatesInput");
const LawBlockWhereInput_1 = require("../../../inputs/LawBlockWhereInput");
const LawBlockScalarFieldEnum_1 = require("../../../../enums/LawBlockScalarFieldEnum");
let GroupByLawBlockArgs = class GroupByLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], GroupByLawBlockArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockOrderByWithAggregationInput_1.LawBlockOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLawBlockArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarFieldEnum_1.LawBlockScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLawBlockArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockScalarWhereWithAggregatesInput_1.LawBlockScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockScalarWhereWithAggregatesInput_1.LawBlockScalarWhereWithAggregatesInput)
], GroupByLawBlockArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLawBlockArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLawBlockArgs.prototype, "skip", void 0);
GroupByLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByLawBlockArgs);
exports.GroupByLawBlockArgs = GroupByLawBlockArgs;
