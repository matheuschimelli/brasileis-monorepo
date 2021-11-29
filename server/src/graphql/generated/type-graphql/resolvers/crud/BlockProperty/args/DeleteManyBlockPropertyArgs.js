"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
let DeleteManyBlockPropertyArgs = class DeleteManyBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], DeleteManyBlockPropertyArgs.prototype, "where", void 0);
DeleteManyBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyBlockPropertyArgs);
exports.DeleteManyBlockPropertyArgs = DeleteManyBlockPropertyArgs;
