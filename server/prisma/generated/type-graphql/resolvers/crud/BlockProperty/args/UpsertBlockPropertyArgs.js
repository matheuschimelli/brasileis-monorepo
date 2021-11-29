"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateInput_1 = require("../../../inputs/BlockPropertyCreateInput");
const BlockPropertyUpdateInput_1 = require("../../../inputs/BlockPropertyUpdateInput");
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
let UpsertBlockPropertyArgs = class UpsertBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], UpsertBlockPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateInput_1.BlockPropertyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateInput_1.BlockPropertyCreateInput)
], UpsertBlockPropertyArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateInput_1.BlockPropertyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateInput_1.BlockPropertyUpdateInput)
], UpsertBlockPropertyArgs.prototype, "update", void 0);
UpsertBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertBlockPropertyArgs);
exports.UpsertBlockPropertyArgs = UpsertBlockPropertyArgs;
