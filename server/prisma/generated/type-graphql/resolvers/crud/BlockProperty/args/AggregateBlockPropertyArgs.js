"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyOrderByWithRelationInput_1 = require("../../../inputs/BlockPropertyOrderByWithRelationInput");
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
let AggregateBlockPropertyArgs = class AggregateBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], AggregateBlockPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyOrderByWithRelationInput_1.BlockPropertyOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateBlockPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], AggregateBlockPropertyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateBlockPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateBlockPropertyArgs.prototype, "skip", void 0);
AggregateBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateBlockPropertyArgs);
exports.AggregateBlockPropertyArgs = AggregateBlockPropertyArgs;
