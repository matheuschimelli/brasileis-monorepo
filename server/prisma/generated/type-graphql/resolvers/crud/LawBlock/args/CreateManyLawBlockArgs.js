"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateManyInput_1 = require("../../../inputs/LawBlockCreateManyInput");
let CreateManyLawBlockArgs = class CreateManyLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LawBlockCreateManyInput_1.LawBlockCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyLawBlockArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyLawBlockArgs.prototype, "skipDuplicates", void 0);
CreateManyLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyLawBlockArgs);
exports.CreateManyLawBlockArgs = CreateManyLawBlockArgs;
