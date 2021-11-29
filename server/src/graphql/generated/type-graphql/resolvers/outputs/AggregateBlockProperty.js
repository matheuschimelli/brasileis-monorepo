"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlockProperty = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyAvgAggregate_1 = require("../outputs/BlockPropertyAvgAggregate");
const BlockPropertyCountAggregate_1 = require("../outputs/BlockPropertyCountAggregate");
const BlockPropertyMaxAggregate_1 = require("../outputs/BlockPropertyMaxAggregate");
const BlockPropertyMinAggregate_1 = require("../outputs/BlockPropertyMinAggregate");
const BlockPropertySumAggregate_1 = require("../outputs/BlockPropertySumAggregate");
let AggregateBlockProperty = class AggregateBlockProperty {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCountAggregate_1.BlockPropertyCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCountAggregate_1.BlockPropertyCountAggregate)
], AggregateBlockProperty.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyAvgAggregate_1.BlockPropertyAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyAvgAggregate_1.BlockPropertyAvgAggregate)
], AggregateBlockProperty.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertySumAggregate_1.BlockPropertySumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertySumAggregate_1.BlockPropertySumAggregate)
], AggregateBlockProperty.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMinAggregate_1.BlockPropertyMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMinAggregate_1.BlockPropertyMinAggregate)
], AggregateBlockProperty.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMaxAggregate_1.BlockPropertyMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMaxAggregate_1.BlockPropertyMaxAggregate)
], AggregateBlockProperty.prototype, "_max", void 0);
AggregateBlockProperty = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateBlockProperty", {
        isAbstract: true
    })
], AggregateBlockProperty);
exports.AggregateBlockProperty = AggregateBlockProperty;
