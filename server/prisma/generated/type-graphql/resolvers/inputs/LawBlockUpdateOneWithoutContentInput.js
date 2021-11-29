"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateOneWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateOrConnectWithoutContentInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutContentInput");
const LawBlockCreateWithoutContentInput_1 = require("../inputs/LawBlockCreateWithoutContentInput");
const LawBlockUpdateWithoutContentInput_1 = require("../inputs/LawBlockUpdateWithoutContentInput");
const LawBlockUpsertWithoutContentInput_1 = require("../inputs/LawBlockUpsertWithoutContentInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockUpdateOneWithoutContentInput = class LawBlockUpdateOneWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput)
], LawBlockUpdateOneWithoutContentInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutContentInput_1.LawBlockCreateOrConnectWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateOrConnectWithoutContentInput_1.LawBlockCreateOrConnectWithoutContentInput)
], LawBlockUpdateOneWithoutContentInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpsertWithoutContentInput_1.LawBlockUpsertWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpsertWithoutContentInput_1.LawBlockUpsertWithoutContentInput)
], LawBlockUpdateOneWithoutContentInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LawBlockUpdateOneWithoutContentInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LawBlockUpdateOneWithoutContentInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockUpdateOneWithoutContentInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutContentInput_1.LawBlockUpdateWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutContentInput_1.LawBlockUpdateWithoutContentInput)
], LawBlockUpdateOneWithoutContentInput.prototype, "update", void 0);
LawBlockUpdateOneWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateOneWithoutContentInput", {
        isAbstract: true
    })
], LawBlockUpdateOneWithoutContentInput);
exports.LawBlockUpdateOneWithoutContentInput = LawBlockUpdateOneWithoutContentInput;
