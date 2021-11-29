"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockUpdateManyMutationInput_1 = require("../../../inputs/LawBlockUpdateManyMutationInput");
const LawBlockWhereInput_1 = require("../../../inputs/LawBlockWhereInput");
let UpdateManyLawBlockArgs = class UpdateManyLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateManyMutationInput_1.LawBlockUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateManyMutationInput_1.LawBlockUpdateManyMutationInput)
], UpdateManyLawBlockArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], UpdateManyLawBlockArgs.prototype, "where", void 0);
UpdateManyLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyLawBlockArgs);
exports.UpdateManyLawBlockArgs = UpdateManyLawBlockArgs;
