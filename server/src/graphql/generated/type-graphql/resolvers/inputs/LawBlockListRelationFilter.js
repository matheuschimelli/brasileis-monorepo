"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockWhereInput_1 = require("../inputs/LawBlockWhereInput");
let LawBlockListRelationFilter = class LawBlockListRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], LawBlockListRelationFilter.prototype, "every", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], LawBlockListRelationFilter.prototype, "some", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], LawBlockListRelationFilter.prototype, "none", void 0);
LawBlockListRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockListRelationFilter", {
        isAbstract: true
    })
], LawBlockListRelationFilter);
exports.LawBlockListRelationFilter = LawBlockListRelationFilter;
