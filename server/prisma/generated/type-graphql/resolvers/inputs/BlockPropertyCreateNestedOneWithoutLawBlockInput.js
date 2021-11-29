"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyCreateNestedOneWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateOrConnectWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput");
const BlockPropertyCreateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateWithoutLawBlockInput");
const BlockPropertyWhereUniqueInput_1 = require("../inputs/BlockPropertyWhereUniqueInput");
let BlockPropertyCreateNestedOneWithoutLawBlockInput = class BlockPropertyCreateNestedOneWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput)
], BlockPropertyCreateNestedOneWithoutLawBlockInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateOrConnectWithoutLawBlockInput_1.BlockPropertyCreateOrConnectWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateOrConnectWithoutLawBlockInput_1.BlockPropertyCreateOrConnectWithoutLawBlockInput)
], BlockPropertyCreateNestedOneWithoutLawBlockInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], BlockPropertyCreateNestedOneWithoutLawBlockInput.prototype, "connect", void 0);
BlockPropertyCreateNestedOneWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyCreateNestedOneWithoutLawBlockInput", {
        isAbstract: true
    })
], BlockPropertyCreateNestedOneWithoutLawBlockInput);
exports.BlockPropertyCreateNestedOneWithoutLawBlockInput = BlockPropertyCreateNestedOneWithoutLawBlockInput;
