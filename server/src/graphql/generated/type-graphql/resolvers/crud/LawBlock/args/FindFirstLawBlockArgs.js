"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockOrderByWithRelationInput_1 = require("../../../inputs/LawBlockOrderByWithRelationInput");
const LawBlockWhereInput_1 = require("../../../inputs/LawBlockWhereInput");
const LawBlockWhereUniqueInput_1 = require("../../../inputs/LawBlockWhereUniqueInput");
const LawBlockScalarFieldEnum_1 = require("../../../../enums/LawBlockScalarFieldEnum");
let FindFirstLawBlockArgs = class FindFirstLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], FindFirstLawBlockArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockOrderByWithRelationInput_1.LawBlockOrderByWithRelationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstLawBlockArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], FindFirstLawBlockArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstLawBlockArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstLawBlockArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarFieldEnum_1.LawBlockScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstLawBlockArgs.prototype, "distinct", void 0);
FindFirstLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstLawBlockArgs);
exports.FindFirstLawBlockArgs = FindFirstLawBlockArgs;
