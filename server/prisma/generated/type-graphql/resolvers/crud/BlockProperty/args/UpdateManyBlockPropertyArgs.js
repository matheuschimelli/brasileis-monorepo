"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyUpdateManyMutationInput_1 = require("../../../inputs/BlockPropertyUpdateManyMutationInput");
const BlockPropertyWhereInput_1 = require("../../../inputs/BlockPropertyWhereInput");
let UpdateManyBlockPropertyArgs = class UpdateManyBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyUpdateManyMutationInput_1.BlockPropertyUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyUpdateManyMutationInput_1.BlockPropertyUpdateManyMutationInput)
], UpdateManyBlockPropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockPropertyWhereInput_1.BlockPropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BlockPropertyWhereInput_1.BlockPropertyWhereInput)
], UpdateManyBlockPropertyArgs.prototype, "where", void 0);
UpdateManyBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyBlockPropertyArgs);
exports.UpdateManyBlockPropertyArgs = UpdateManyBlockPropertyArgs;
