"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockWhereUniqueInput_1 = require("../../../inputs/LawBlockWhereUniqueInput");
let FindUniqueLawBlockArgs = class FindUniqueLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], FindUniqueLawBlockArgs.prototype, "where", void 0);
FindUniqueLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueLawBlockArgs);
exports.FindUniqueLawBlockArgs = FindUniqueLawBlockArgs;
