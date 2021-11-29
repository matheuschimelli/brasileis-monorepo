"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBlockTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumBlockTypeFilter_1 = require("../inputs/NestedEnumBlockTypeFilter");
const BlockType_1 = require("../../enums/BlockType");
let EnumBlockTypeFilter = class EnumBlockTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumBlockTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumBlockTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumBlockTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter_1.NestedEnumBlockTypeFilter)
], EnumBlockTypeFilter.prototype, "not", void 0);
EnumBlockTypeFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumBlockTypeFilter", {
        isAbstract: true
    })
], EnumBlockTypeFilter);
exports.EnumBlockTypeFilter = EnumBlockTypeFilter;
