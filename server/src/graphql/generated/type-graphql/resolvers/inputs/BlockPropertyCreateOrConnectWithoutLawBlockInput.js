"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyCreateOrConnectWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateWithoutLawBlockInput");
const BlockPropertyWhereUniqueInput_1 = require("../inputs/BlockPropertyWhereUniqueInput");
let BlockPropertyCreateOrConnectWithoutLawBlockInput = class BlockPropertyCreateOrConnectWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], BlockPropertyCreateOrConnectWithoutLawBlockInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput)
], BlockPropertyCreateOrConnectWithoutLawBlockInput.prototype, "create", void 0);
BlockPropertyCreateOrConnectWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyCreateOrConnectWithoutLawBlockInput", {
        isAbstract: true
    })
], BlockPropertyCreateOrConnectWithoutLawBlockInput);
exports.BlockPropertyCreateOrConnectWithoutLawBlockInput = BlockPropertyCreateOrConnectWithoutLawBlockInput;
