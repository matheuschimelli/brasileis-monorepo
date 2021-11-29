"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
let FindUniqueBlockPropertyArgs = class FindUniqueBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], FindUniqueBlockPropertyArgs.prototype, "where", void 0);
FindUniqueBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueBlockPropertyArgs);
exports.FindUniqueBlockPropertyArgs = FindUniqueBlockPropertyArgs;
