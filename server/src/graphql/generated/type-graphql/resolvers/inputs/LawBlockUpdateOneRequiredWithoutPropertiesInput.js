"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateOneRequiredWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateOrConnectWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateOrConnectWithoutPropertiesInput");
const LawBlockCreateWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateWithoutPropertiesInput");
const LawBlockUpdateWithoutPropertiesInput_1 = require("../inputs/LawBlockUpdateWithoutPropertiesInput");
const LawBlockUpsertWithoutPropertiesInput_1 = require("../inputs/LawBlockUpsertWithoutPropertiesInput");
const LawBlockWhereUniqueInput_1 = require("../inputs/LawBlockWhereUniqueInput");
let LawBlockUpdateOneRequiredWithoutPropertiesInput = class LawBlockUpdateOneRequiredWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput)
], LawBlockUpdateOneRequiredWithoutPropertiesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateOrConnectWithoutPropertiesInput_1.LawBlockCreateOrConnectWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateOrConnectWithoutPropertiesInput_1.LawBlockCreateOrConnectWithoutPropertiesInput)
], LawBlockUpdateOneRequiredWithoutPropertiesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpsertWithoutPropertiesInput_1.LawBlockUpsertWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpsertWithoutPropertiesInput_1.LawBlockUpsertWithoutPropertiesInput)
], LawBlockUpdateOneRequiredWithoutPropertiesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereUniqueInput_1.LawBlockWhereUniqueInput)
], LawBlockUpdateOneRequiredWithoutPropertiesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutPropertiesInput_1.LawBlockUpdateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutPropertiesInput_1.LawBlockUpdateWithoutPropertiesInput)
], LawBlockUpdateOneRequiredWithoutPropertiesInput.prototype, "update", void 0);
LawBlockUpdateOneRequiredWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateOneRequiredWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockUpdateOneRequiredWithoutPropertiesInput);
exports.LawBlockUpdateOneRequiredWithoutPropertiesInput = LawBlockUpdateOneRequiredWithoutPropertiesInput;
