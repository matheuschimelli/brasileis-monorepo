"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateWithWhereUniqueWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockUpdateWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateWithoutLawBlockInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockUpdateWithWhereUniqueWithoutLawBlockInput = class LawBlockUpdateWithWhereUniqueWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockUpdateWithWhereUniqueWithoutLawBlockInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutLawBlockInput_1.LawBlockUpdateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutLawBlockInput_1.LawBlockUpdateWithoutLawBlockInput)
], LawBlockUpdateWithWhereUniqueWithoutLawBlockInput.prototype, "data", void 0);
LawBlockUpdateWithWhereUniqueWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateWithWhereUniqueWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockUpdateWithWhereUniqueWithoutLawBlockInput);
exports.LawBlockUpdateWithWhereUniqueWithoutLawBlockInput = LawBlockUpdateWithWhereUniqueWithoutLawBlockInput;
