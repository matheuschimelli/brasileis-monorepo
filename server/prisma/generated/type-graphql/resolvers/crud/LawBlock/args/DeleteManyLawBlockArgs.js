"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLawBlockArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LawBlockWhereInput_1 = require("../../../inputs/LawBlockWhereInput");
let DeleteManyLawBlockArgs = class DeleteManyLawBlockArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LawBlockWhereInput_1.LawBlockWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LawBlockWhereInput_1.LawBlockWhereInput)
], DeleteManyLawBlockArgs.prototype, "where", void 0);
DeleteManyLawBlockArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyLawBlockArgs);
exports.DeleteManyLawBlockArgs = DeleteManyLawBlockArgs;
