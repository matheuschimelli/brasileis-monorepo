"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateNestedOneWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateOrConnectWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutPropertiesInput");
const LawBlockCreateWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateWithoutPropertiesInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateNestedOneWithoutPropertiesInput = class LawBlockCreateNestedOneWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput)
], LawBlockCreateNestedOneWithoutPropertiesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutPropertiesInput_1.LawBlockCreateOrConnectWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateOrConnectWithoutPropertiesInput_1.LawBlockCreateOrConnectWithoutPropertiesInput)
], LawBlockCreateNestedOneWithoutPropertiesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockCreateNestedOneWithoutPropertiesInput.prototype, "connect", void 0);
LawBlockCreateNestedOneWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateNestedOneWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockCreateNestedOneWithoutPropertiesInput);
exports.LawBlockCreateNestedOneWithoutPropertiesInput = LawBlockCreateNestedOneWithoutPropertiesInput;
