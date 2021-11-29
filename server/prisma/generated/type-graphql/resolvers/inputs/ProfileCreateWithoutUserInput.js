"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProfileCreateWithoutUserInput = class ProfileCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateWithoutUserInput.prototype, "picture", void 0);
ProfileCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileCreateWithoutUserInput", {
        isAbstract: true
    })
], ProfileCreateWithoutUserInput);
exports.ProfileCreateWithoutUserInput = ProfileCreateWithoutUserInput;
