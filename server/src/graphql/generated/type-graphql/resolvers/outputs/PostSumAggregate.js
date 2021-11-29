"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PostSumAggregate = class PostSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostSumAggregate.prototype, "id", void 0);
PostSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PostSumAggregate", {
        isAbstract: true
    })
], PostSumAggregate);
exports.PostSumAggregate = PostSumAggregate;
