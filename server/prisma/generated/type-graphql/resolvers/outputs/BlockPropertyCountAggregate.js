"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPropertyCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BlockPropertyCountAggregate = class BlockPropertyCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "identifier", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "comment", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "year", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "author", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "membersOnly", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "searchString", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "lawBlockId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BlockPropertyCountAggregate.prototype, "_all", void 0);
BlockPropertyCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("BlockPropertyCountAggregate", {
        isAbstract: true
    })
], BlockPropertyCountAggregate);
exports.BlockPropertyCountAggregate = BlockPropertyCountAggregate;
