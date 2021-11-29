"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockUpsertWithoutContentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateWithoutContentInput_1 = require("../inputs/LawBlockCreateWithoutContentInput");
const LawBlockUpdateWithoutContentInput_1 = require("../inputs/LawBlockUpdateWithoutContentInput");
let LawBlockUpsertWithoutContentInput = class LawBlockUpsertWithoutContentInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockUpdateWithoutContentInput_1.LawBlockUpdateWithoutContentInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockUpdateWithoutContentInput_1.LawBlockUpdateWithoutContentInput)
], LawBlockUpsertWithoutContentInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateWithoutContentInput_1.LawBlockCreateWithoutContentInput)
], LawBlockUpsertWithoutContentInput.prototype, "create", void 0);
LawBlockUpsertWithoutContentInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockUpsertWithoutContentInput", {
        isAbstract: true
    })
], LawBlockUpsertWithoutContentInput);
exports.LawBlockUpsertWithoutContentInput = LawBlockUpsertWithoutContentInput;
