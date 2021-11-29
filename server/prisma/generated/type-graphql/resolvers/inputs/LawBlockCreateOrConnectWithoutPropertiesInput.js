"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateOrConnectWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateWithoutPropertiesInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockCreateOrConnectWithoutPropertiesInput = class LawBlockCreateOrConnectWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockCreateOrConnectWithoutPropertiesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput)
], LawBlockCreateOrConnectWithoutPropertiesInput.prototype, "create", void 0);
LawBlockCreateOrConnectWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateOrConnectWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockCreateOrConnectWithoutPropertiesInput);
exports.LawBlockCreateOrConnectWithoutPropertiesInput = LawBlockCreateOrConnectWithoutPropertiesInput;
