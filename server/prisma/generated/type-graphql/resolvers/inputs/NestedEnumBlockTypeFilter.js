"use strict";
var NestedEnumBlockTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumBlockTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../../enums/BlockType");
let NestedEnumBlockTypeFilter = NestedEnumBlockTypeFilter_1 = class NestedEnumBlockTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumBlockTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumBlockTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockType_1.BlockType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumBlockTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumBlockTypeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumBlockTypeFilter)
], NestedEnumBlockTypeFilter.prototype, "not", void 0);
NestedEnumBlockTypeFilter = NestedEnumBlockTypeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumBlockTypeFilter", {
        isAbstract: true
    })
], NestedEnumBlockTypeFilter);
exports.NestedEnumBlockTypeFilter = NestedEnumBlockTypeFilter;
