"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCreateManyLawBlockInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockType_1 = require("../../enums/BlockType");
let LawBlockCreateManyLawBlockInput = class LawBlockCreateManyLawBlockInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateManyLawBlockInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BlockType_1.BlockType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockCreateManyLawBlockInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateManyLawBlockInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], LawBlockCreateManyLawBlockInput.prototype, "updatedAt", void 0);
LawBlockCreateManyLawBlockInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockCreateManyLawBlockInput", {
        isAbstract: true
    })
], LawBlockCreateManyLawBlockInput);
exports.LawBlockCreateManyLawBlockInput = LawBlockCreateManyLawBlockInput;
