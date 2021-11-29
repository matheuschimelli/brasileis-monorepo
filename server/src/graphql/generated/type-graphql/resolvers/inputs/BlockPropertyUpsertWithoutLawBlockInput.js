"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyUpsertWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyCreateWithoutLawBlockInput");
const BlockPropertyUpdateWithoutLawBlockInput_1 = require("../inputs/BlockPropertyUpdateWithoutLawBlockInput");
let BlockPropertyUpsertWithoutLawBlockInput = class BlockPropertyUpsertWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateWithoutLawBlockInput_1.BlockPropertyUpdateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateWithoutLawBlockInput_1.BlockPropertyUpdateWithoutLawBlockInput)
], BlockPropertyUpsertWithoutLawBlockInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateWithoutLawBlockInput_1.BlockPropertyCreateWithoutLawBlockInput)
], BlockPropertyUpsertWithoutLawBlockInput.prototype, "create", void 0);
BlockPropertyUpsertWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BlockPropertyUpsertWithoutLawBlockInput", {
        isAbstract: true
    })
], BlockPropertyUpsertWithoutLawBlockInput);
exports.BlockPropertyUpsertWithoutLawBlockInput = BlockPropertyUpsertWithoutLawBlockInput;
