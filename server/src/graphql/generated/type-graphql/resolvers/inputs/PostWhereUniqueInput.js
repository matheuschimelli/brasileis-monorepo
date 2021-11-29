"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PostWhereUniqueInput = class PostWhereUniqueInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PostWhereUniqueInput.prototype, "id", void 0);
PostWhereUniqueInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PostWhereUniqueInput", {
        isAbstract: true
    })
], PostWhereUniqueInput);
exports.PostWhereUniqueInput = PostWhereUniqueInput;
