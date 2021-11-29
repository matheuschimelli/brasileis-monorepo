"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyOrderByWithRelationInput_1 = require("../../../inputs/BlockPropertyOrderByWithRelationInput");
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
const BlockPropertyScalarFieldEnum_1 = require("../../../../enums/BlockPropertyScalarFieldEnum");
let FindManyBlockPropertyArgs = class FindManyBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], FindManyBlockPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyOrderByWithRelationInput_1.BlockPropertyOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyBlockPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], FindManyBlockPropertyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyBlockPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyBlockPropertyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarFieldEnum_1.BlockPropertyScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyBlockPropertyArgs.prototype, "distinct", void 0);
FindManyBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyBlockPropertyArgs);
exports.FindManyBlockPropertyArgs = FindManyBlockPropertyArgs;
