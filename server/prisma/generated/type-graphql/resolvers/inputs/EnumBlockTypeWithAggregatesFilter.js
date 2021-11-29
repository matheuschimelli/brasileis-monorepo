"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBlockTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumBlockTypeFilter_1 = require("../inputs/NestedEnumBlockTypeFilter");
const NestedEnumBlockTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumBlockTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const BlockType_1 = require("../../enums/BlockType");
let EnumBlockTypeWithAggregatesFilter = class EnumBlockTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumBlockTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumBlockTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumBlockTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeWithAggregatesFilter_1.NestedEnumBlockTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeWithAggregatesFilter_1.NestedEnumBlockTypeWithAggregatesFilter)
], EnumBlockTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumBlockTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter)
], EnumBlockTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter)
], EnumBlockTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumBlockTypeWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumBlockTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumBlockTypeWithAggregatesFilter);
exports.EnumBlockTypeWithAggregatesFilter = EnumBlockTypeWithAggregatesFilter;
