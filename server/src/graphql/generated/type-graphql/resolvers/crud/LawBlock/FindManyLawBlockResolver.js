"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyLawBlockArgs_1 = require("./args/FindManyLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const helpers_1 = require("../../../helpers");
let FindManyLawBlockResolver = class FindManyLawBlockResolver {
    async lawBlocks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LawBlock_1.LawBlock], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyLawBlockArgs_1.FindManyLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyLawBlockResolver.prototype, "lawBlocks", null);
FindManyLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], FindManyLawBlockResolver);
exports.FindManyLawBlockResolver = FindManyLawBlockResolver;
