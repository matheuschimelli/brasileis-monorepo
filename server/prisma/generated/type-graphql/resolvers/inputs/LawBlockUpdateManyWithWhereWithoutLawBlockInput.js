"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpdateManyWithWhereWithoutLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockScalarWhereInput_1 = require("../inputs/LawBlockScalarWhereInput");
const LawBlockUpdateManyMutationInput_1 = require("../inputs/LawBlockUpdateManyMutationInput");
let LawBlockUpdateManyWithWhereWithoutLawBlockInput = class LawBlockUpdateManyWithWhereWithoutLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockScalarWhereInput_1.LawBlockScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockScalarWhereInput_1.LawBlockScalarWhereInput)
], LawBlockUpdateManyWithWhereWithoutLawBlockInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateManyMutationInput_1.LawBlockUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateManyMutationInput_1.LawBlockUpdateManyMutationInput)
], LawBlockUpdateManyWithWhereWithoutLawBlockInput.prototype, "data", void 0);
LawBlockUpdateManyWithWhereWithoutLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpdateManyWithWhereWithoutLawBlockInput", {
        isAbstract: true
    })
], LawBlockUpdateManyWithWhereWithoutLawBlockInput);
exports.LawBlockUpdateManyWithWhereWithoutLawBlockInput = LawBlockUpdateManyWithWhereWithoutLawBlockInput;
