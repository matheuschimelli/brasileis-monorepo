"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpsertWithWhereUniqueWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateWithoutLawBlockInput");
const LawBlockUpdateWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateWithoutLawBlockInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockUpsertWithWhereUniqueWithoutLawBlockInput = class LawBlockUpsertWithWhereUniqueWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockUpsertWithWhereUniqueWithoutLawBlockInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutLawBlockInput_1.LawBlockUpdateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutLawBlockInput_1.LawBlockUpdateWithoutLawBlockInput)
], LawBlockUpsertWithWhereUniqueWithoutLawBlockInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput)
], LawBlockUpsertWithWhereUniqueWithoutLawBlockInput.prototype, "create", void 0);
LawBlockUpsertWithWhereUniqueWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpsertWithWhereUniqueWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockUpsertWithWhereUniqueWithoutLawBlockInput);
exports.LawBlockUpsertWithWhereUniqueWithoutLawBlockInput = LawBlockUpsertWithWhereUniqueWithoutLawBlockInput;
