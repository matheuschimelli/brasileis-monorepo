"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateInput_1 = require("../../../inputs/BlockPropertyCreateInput");
let CreateBlockPropertyArgs = class CreateBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyCreateInput_1.BlockPropertyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyCreateInput_1.BlockPropertyCreateInput)
], CreateBlockPropertyArgs.prototype, "data", void 0);
CreateBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateBlockPropertyArgs);
exports.CreateBlockPropertyArgs = CreateBlockPropertyArgs;
