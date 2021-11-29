"use strict";
var NestedEnumBlockTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBlockTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumBlockTypeFilter_1 = require("../inputs/NestedEnumBlockTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const BlockType_1 = require("../../enums/BlockType");
let NestedEnumBlockTypeWithAggregatesFilter = NestedEnumBlockTypeWithAggregatesFilter_1 = class NestedEnumBlockTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeWithAggregatesFilter)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter)
], NestedEnumBlockTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumBlockTypeWithAggregatesFilter = NestedEnumBlockTypeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumBlockTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumBlockTypeWithAggregatesFilter);
exports.NestedEnumBlockTypeWithAggregatesFilter = NestedEnumBlockTypeWithAggregatesFilter;
