"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateInput_1 = require("../../../inputs/LawBlockCreateInput");
const LawBlockUpdateInput_1 = require("../../../inputs/LawBlockUpdateInput");
const LawBlockWhereUniqueInput_1 = require("../../../inputs/LawBlockWhereUniqueInput");
let UpsertLawBlockArgs = class UpsertLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], UpsertLawBlockArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateInput_1.LawBlockCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateInput_1.LawBlockCreateInput)
], UpsertLawBlockArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateInput_1.LawBlockUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateInput_1.LawBlockUpdateInput)
], UpsertLawBlockArgs.prototype, "update", void 0);
UpsertLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertLawBlockArgs);
exports.UpsertLawBlockArgs = UpsertLawBlockArgs;
