"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProfileMinAggregate = class ProfileMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinAggregate.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinAggregate.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProfileMinAggregate.prototype, "userId", void 0);
ProfileMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("ProfileMinAggregate", {
        isAbstract: true
    })
], ProfileMinAggregate);
exports.ProfileMinAggregate = ProfileMinAggregate;
