"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockCreateInput_1 = require("../../../inputs/LawBlockCreateInput");
let CreateLawBlockArgs = class CreateLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockCreateInput_1.LawBlockCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockCreateInput_1.LawBlockCreateInput)
], CreateLawBlockArgs.prototype, "data", void 0);
CreateLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateLawBlockArgs);
exports.CreateLawBlockArgs = CreateLawBlockArgs;
