"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockWhereInput_1 = require("../inputs/LawBlockWhereInput");
let LawBlockRelationFilter = class LawBlockRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], LawBlockRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], LawBlockRelationFilter.prototype, "isNot", void 0);
LawBlockRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockRelationFilter", {
        isAbstract: true
    })
], LawBlockRelationFilter);
exports.LawBlockRelationFilter = LawBlockRelationFilter;
