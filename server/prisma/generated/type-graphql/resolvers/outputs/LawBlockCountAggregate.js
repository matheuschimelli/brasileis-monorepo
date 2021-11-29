"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LawBlockCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LawBlockCountAggregate = class LawBlockCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LawBlockCountAggregate.prototype, "_all", void 0);
LawBlockCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LawBlockCountAggregate", {
        isAbstract: true
    })
], LawBlockCountAggregate);
exports.LawBlockCountAggregate = LawBlockCountAggregate;
