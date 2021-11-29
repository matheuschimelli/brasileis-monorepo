"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyOrderByWithRelationInput_1 = require("../../../inputs/BlockPropertyOrderByWithRelationInput");
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
const BlockPropertyScalarFieldEnum_1 = require("../../../../enums/BlockPropertyScalarFieldEnum");
let FindFirstBlockPropertyArgs = class FindFirstBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], FindFirstBlockPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyOrderByWithRelationInput_1.BlockPropertyOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstBlockPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], FindFirstBlockPropertyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstBlockPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstBlockPropertyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyScalarFieldEnum_1.BlockPropertyScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstBlockPropertyArgs.prototype, "distinct", void 0);
FindFirstBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstBlockPropertyArgs);
exports.FindFirstBlockPropertyArgs = FindFirstBlockPropertyArgs;
