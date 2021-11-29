"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateManyWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateManyLawBlockInputEnvelope_1 = require("../inputs/LawBlockCreateManyLawBlockInputEnvelope");
const LawBlockCreateOrConnectWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutLawBlockInput");
const LawBlockCreateWithoutLawBlockInput_1 = require("../inputs/LawBlockCreateWithoutLawBlockInput");
const LawBlockScalarWhereInput_1 = require("../inputs/LawBlockScalarWhereInput");
const LawBlockUpdateManyWithWhereWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateManyWithWhereWithoutLawBlockInput");
const LawBlockUpdateWithWhereUniqueWithoutLawBlockInput_1 = require("../inputs/LawBlockUpdateWithWhereUniqueWithoutLawBlockInput");
const LawBlockUpsertWithWhereUniqueWithoutLawBlockInput_1 = require("../inputs/LawBlockUpsertWithWhereUniqueWithoutLawBlockInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockUpdateManyWithoutLawBlockInput = class LawBlockUpdateManyWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateWithoutLawBlockInput_1.LawBlockCreateWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateOrConnectWithoutLawBlockInput_1.LawBlockCreateOrConnectWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockUpsertWithWhereUniqueWithoutLawBlockInput_1.LawBlockUpsertWithWhereUniqueWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateManyLawBlockInputEnvelope_1.LawBlockCreateManyLawBlockInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateManyLawBlockInputEnvelope_1.LawBlockCreateManyLawBlockInputEnvelope)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockUpdateWithWhereUniqueWithoutLawBlockInput_1.LawBlockUpdateWithWhereUniqueWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockUpdateManyWithWhereWithoutLawBlockInput_1.LawBlockUpdateManyWithWhereWithoutLawBlockInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockScalarWhereInput_1.LawBlockScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockUpdateManyWithoutLawBlockInput.prototype, "deleteMany", void 0);
LawBlockUpdateManyWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateManyWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockUpdateManyWithoutLawBlockInput);
exports.LawBlockUpdateManyWithoutLawBlockInput = LawBlockUpdateManyWithoutLawBlockInput;
