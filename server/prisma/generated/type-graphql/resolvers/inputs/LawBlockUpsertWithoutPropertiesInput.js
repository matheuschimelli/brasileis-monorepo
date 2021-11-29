"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpsertWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutPropertiesInput_1 = require("../inputs/LawBlockCreateWithoutPropertiesInput");
const LawBlockUpdateWithoutPropertiesInput_1 = require("../inputs/LawBlockUpdateWithoutPropertiesInput");
let LawBlockUpsertWithoutPropertiesInput = class LawBlockUpsertWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutPropertiesInput_1.LawBlockUpdateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutPropertiesInput_1.LawBlockUpdateWithoutPropertiesInput)
], LawBlockUpsertWithoutPropertiesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutPropertiesInput_1.LawBlockCreateWithoutPropertiesInput)
], LawBlockUpsertWithoutPropertiesInput.prototype, "create", void 0);
LawBlockUpsertWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpsertWithoutPropertiesInput", {
        isAbstract: true
    })
], LawBlockUpsertWithoutPropertiesInput);
exports.LawBlockUpsertWithoutPropertiesInput = LawBlockUpsertWithoutPropertiesInput;
