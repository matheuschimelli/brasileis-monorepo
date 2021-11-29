"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateNestedManyWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateManyLawBlockInputEnvelope_1 = require("../inputs/LawBlockCreateManyLawBlockInputEnvelope");
const LawBlockCreateOrConnectWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutLawBlockInput");
const LawBlockCreateWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateWithoutLawBlockInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateNestedManyWithoutLawBlockInput = class LawBlockCreateNestedManyWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockCreateNestedManyWithoutLawBlockInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateOrConnectWithoutLawBlockInput_1.LawBlockCreateOrConnectWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockCreateNestedManyWithoutLawBlockInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateManyLawBlockInputEnvelope_1.LawBlockCreateManyLawBlockInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateManyLawBlockInputEnvelope_1.LawBlockCreateManyLawBlockInputEnvelope)
], LawBlockCreateNestedManyWithoutLawBlockInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockCreateNestedManyWithoutLawBlockInput.prototype, "connect", void 0);
LawBlockCreateNestedManyWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateNestedManyWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockCreateNestedManyWithoutLawBlockInput);
exports.LawBlockCreateNestedManyWithoutLawBlockInput = LawBlockCreateNestedManyWithoutLawBlockInput;
