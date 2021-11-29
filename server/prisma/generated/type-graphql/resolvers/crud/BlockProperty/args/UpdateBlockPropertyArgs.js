"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyUpdateInput_1 = require("../../../inputs/BlockPropertyUpdateInput");
const BlockPropertyWhereUniqueInput_1 = require("../../../inputs/BlockPropertyWhereUniqueInput");
let UpdateBlockPropertyArgs = class UpdateBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateInput_1.BlockPropertyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateInput_1.BlockPropertyUpdateInput)
], UpdateBlockPropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereUniqueInput_1.BlockPropertyWhereUniqueInput)
], UpdateBlockPropertyArgs.prototype, "where", void 0);
UpdateBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateBlockPropertyArgs);
exports.UpdateBlockPropertyArgs = UpdateBlockPropertyArgs;
