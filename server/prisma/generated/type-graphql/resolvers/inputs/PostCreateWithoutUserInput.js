"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PostCreateWithoutUserInput = class PostCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutUserInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PostCreateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PostCreateWithoutUserInput.prototype, "content", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PostCreateWithoutUserInput.prototype, "published", void 0);
PostCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostCreateWithoutUserInput", {
        isAbstract: true
    })
], PostCreateWithoutUserInput);
exports.PostCreateWithoutUserInput = PostCreateWithoutUserInput;
