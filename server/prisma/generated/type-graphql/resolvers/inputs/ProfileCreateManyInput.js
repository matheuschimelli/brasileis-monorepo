"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProfileCreateManyInput = class ProfileCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateManyInput.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateManyInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileCreateManyInput.prototype, "userId", void 0);
ProfileCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProfileCreateManyInput", {
        isAbstract: true
    })
], ProfileCreateManyInput);
exports.ProfileCreateManyInput = ProfileCreateManyInput;
