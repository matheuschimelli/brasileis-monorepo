"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateNestedOneWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateOrConnectWithoutContentInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutContentInput");
const LawBlockCreateWithoutContentInput_1 = require("../inputs/LawBlockCreateWithoutContentInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateNestedOneWithoutContentInput = class LawBlockCreateNestedOneWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput)
], LawBlockCreateNestedOneWithoutContentInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutContentInput_1.LawBlockCreateOrConnectWithoutContentInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateOrConnectWithoutContentInput_1.LawBlockCreateOrConnectWithoutContentInput)
], LawBlockCreateNestedOneWithoutContentInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockCreateNestedOneWithoutContentInput.prototype, "connect", void 0);
LawBlockCreateNestedOneWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateNestedOneWithoutContentInput", {
        isAbstract: true
    })
], LawBlockCreateNestedOneWithoutContentInput);
exports.LawBlockCreateNestedOneWithoutContentInput = LawBlockCreateNestedOneWithoutContentInput;
