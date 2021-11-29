"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyWhereInput_1 = require("../inputs/BlockPropertyWhereInput");
let BlockPropertyRelationFilter = class BlockPropertyRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], BlockPropertyRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], BlockPropertyRelationFilter.prototype, "isNot", void 0);
BlockPropertyRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyRelationFilter", {
        isAbstract: true
    })
], BlockPropertyRelationFilter);
exports.BlockPropertyRelationFilter = BlockPropertyRelationFilter;
