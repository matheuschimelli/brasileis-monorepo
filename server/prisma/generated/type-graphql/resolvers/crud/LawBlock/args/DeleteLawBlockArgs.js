"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockWhereUniqueInput_1 = require("../../../inputs/LawBlockWhereUniqueInput");
let DeleteLawBlockArgs = class DeleteLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], DeleteLawBlockArgs.prototype, "where", void 0);
DeleteLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteLawBlockArgs);
exports.DeleteLawBlockArgs = DeleteLawBlockArgs;
