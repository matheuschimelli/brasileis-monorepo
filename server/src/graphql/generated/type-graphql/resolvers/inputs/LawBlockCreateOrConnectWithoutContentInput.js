"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateOrConnectWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutContentInput_1 = require("../inputs/LawBlockCreateWithoutContentInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateOrConnectWithoutContentInput = class LawBlockCreateOrConnectWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockCreateOrConnectWithoutContentInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput)
], LawBlockCreateOrConnectWithoutContentInput.prototype, "create", void 0);
LawBlockCreateOrConnectWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutContentInput", {
        isAbstract: true
    })
], LawBlockCreateOrConnectWithoutContentInput);
exports.LawBlockCreateOrConnectWithoutContentInput = LawBlockCreateOrConnectWithoutContentInput;
