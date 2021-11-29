"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyAvgAggregate_1 = require("../outputs/BlockPropertyAvgAggregate");
const BlockPropertyCountAggregate_1 = require("../outputs/BlockPropertyCountAggregate");
const BlockPropertyMaxAggregate_1 = require("../outputs/BlockPropertyMaxAggregate");
const BlockPropertyMinAggregate_1 = require("../outputs/BlockPropertyMinAggregate");
const BlockPropertySumAggregate_1 = require("../outputs/BlockPropertySumAggregate");
let BlockPropertyGroupBy = class BlockPropertyGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyGroupBy.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlockPropertyGroupBy.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BlockPropertyGroupBy.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCountAggregate_1.BlockPropertyCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCountAggregate_1.BlockPropertyCountAggregate)
], BlockPropertyGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyAvgAggregate_1.BlockPropertyAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyAvgAggregate_1.BlockPropertyAvgAggregate)
], BlockPropertyGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertySumAggregate_1.BlockPropertySumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertySumAggregate_1.BlockPropertySumAggregate)
], BlockPropertyGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMinAggregate_1.BlockPropertyMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMinAggregate_1.BlockPropertyMinAggregate)
], BlockPropertyGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyMaxAggregate_1.BlockPropertyMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyMaxAggregate_1.BlockPropertyMaxAggregate)
], BlockPropertyGroupBy.prototype, "_max", void 0);
BlockPropertyGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlockPropertyGroupBy", {
        isAbstract: true
    })
], BlockPropertyGroupBy);
exports.BlockPropertyGroupBy = BlockPropertyGroupBy;
