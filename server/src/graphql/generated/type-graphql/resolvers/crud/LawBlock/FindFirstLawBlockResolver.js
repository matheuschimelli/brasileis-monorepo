"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindFirstLawBlockArgs_1 = require("./args/FindFirstLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const helpers_1 = require("../../../helpers");
let FindFirstLawBlockResolver = class FindFirstLawBlockResolver {
    async findFirstLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => LawBlock_1.LawBlock, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstLawBlockArgs_1.FindFirstLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindFirstLawBlockResolver.prototype, "findFirstLawBlock", null);
FindFirstLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], FindFirstLawBlockResolver);
exports.FindFirstLawBlockResolver = FindFirstLawBlockResolver;
