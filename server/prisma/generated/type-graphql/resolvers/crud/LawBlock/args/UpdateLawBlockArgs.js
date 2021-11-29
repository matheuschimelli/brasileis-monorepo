"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockUpdateInput_1 = require("../../../inputs/LawBlockUpdateInput");
const LawBlockWhereUniqueInput_1 = require("../../../inputs/LawBlockWhereUniqueInput");
let UpdateLawBlockArgs = class UpdateLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateInput_1.LawBlockUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateInput_1.LawBlockUpdateInput)
], UpdateLawBlockArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], UpdateLawBlockArgs.prototype, "where", void 0);
UpdateLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateLawBlockArgs);
exports.UpdateLawBlockArgs = UpdateLawBlockArgs;
