"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateManyLawBlockInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateManyLawBlockInput_1 = require("../inputs/LawBlockCreateManyLawBlockInput");
let LawBlockCreateManyLawBlockInputEnvelope = class LawBlockCreateManyLawBlockInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateManyLawBlockInput_1.LawBlockCreateManyLawBlockInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LawBlockCreateManyLawBlockInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], LawBlockCreateManyLawBlockInputEnvelope.prototype, "skipDuplicates", void 0);
LawBlockCreateManyLawBlockInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateManyLawBlockInputEnvelope", {
        isAbstract: true
    })
], LawBlockCreateManyLawBlockInputEnvelope);
exports.LawBlockCreateManyLawBlockInputEnvelope = LawBlockCreateManyLawBlockInputEnvelope;
