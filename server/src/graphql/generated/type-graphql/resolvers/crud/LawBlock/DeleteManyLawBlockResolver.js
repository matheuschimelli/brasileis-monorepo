"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteManyLawBlockArgs_1 = require("./args/DeleteManyLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyLawBlockResolver = class DeleteManyLawBlockResolver {
    async deleteManyLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyLawBlockArgs_1.DeleteManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteManyLawBlockResolver.prototype, "deleteManyLawBlock", null);
DeleteManyLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], DeleteManyLawBlockResolver);
exports.DeleteManyLawBlockResolver = DeleteManyLawBlockResolver;
