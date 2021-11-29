"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateOrConnectWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateWithoutLawBlockInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateOrConnectWithoutLawBlockInput = class LawBlockCreateOrConnectWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockCreateOrConnectWithoutLawBlockInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput)
], LawBlockCreateOrConnectWithoutLawBlockInput.prototype, "create", void 0);
LawBlockCreateOrConnectWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockCreateOrConnectWithoutLawBlockInput);
exports.LawBlockCreateOrConnectWithoutLawBlockInput = LawBlockCreateOrConnectWithoutLawBlockInput;
