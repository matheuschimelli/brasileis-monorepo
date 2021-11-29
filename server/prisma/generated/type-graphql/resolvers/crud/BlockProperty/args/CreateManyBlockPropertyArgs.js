"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBlockPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BlockPropertyCreateManyInput_1 = require("../../../inputs/BlockPropertyCreateManyInput");
let CreateManyBlockPropertyArgs = class CreateManyBlockPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [BlockPropertyCreateManyInput_1.BlockPropertyCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyBlockPropertyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyBlockPropertyArgs.prototype, "skipDuplicates", void 0);
CreateManyBlockPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyBlockPropertyArgs);
exports.CreateManyBlockPropertyArgs = CreateManyBlockPropertyArgs;
