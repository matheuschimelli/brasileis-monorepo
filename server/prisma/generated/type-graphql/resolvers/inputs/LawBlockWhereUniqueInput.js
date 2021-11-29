"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LawBlockWhereUniqueInput = class LawBlockWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LawBlockWhereUniqueInput.prototype, "id", void 0);
LawBlockWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LawBlockWhereUniqueInput", {
        isAbstract: true
    })
], LawBlockWhereUniqueInput);
exports.LawBlockWhereUniqueInput = LawBlockWhereUniqueInput;
