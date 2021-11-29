"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyUpdateOneWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateOrConnectWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput");
const BlockPropertyCreateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateWithoutLawBlockInput");
const BlockPropertyUpdateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyUpdateWithoutLawBlockInput");
const BlockPropertyUpsertWithoutLawBlockInput_1 = require("../inputs/BlockPropertyUpsertWithoutLawBlockInput");
const BlockPropertyWhereUniqueInput_1 = require("../inputs/BlockPropertyWhereUniqueInput");
let BlockPropertyUpdateOneWithoutLawBlockInput = class BlockPropertyUpdateOneWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateOrConnectWithoutLawBlockInput_1.BlockPropertyCreateOrConnectWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateOrConnectWithoutLawBlockInput_1.BlockPropertyCreateOrConnectWithoutLawBlockInput)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpsertWithoutLawBlockInput_1.BlockPropertyUpsertWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpsertWithoutLawBlockInput_1.BlockPropertyUpsertWithoutLawBlockInput)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateWithoutLawBlockInput_1.BlockPropertyUpdateWithoutLawBlockInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateWithoutLawBlockInput_1.BlockPropertyUpdateWithoutLawBlockInput)
], BlockPropertyUpdateOneWithoutLawBlockInput.prototype, "update", void 0);
BlockPropertyUpdateOneWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyUpdateOneWithoutLawBlockInput", {
        isAbstract: true
    })
], BlockPropertyUpdateOneWithoutLawBlockInput);
exports.BlockPropertyUpdateOneWithoutLawBlockInput = BlockPropertyUpdateOneWithoutLawBlockInput;
