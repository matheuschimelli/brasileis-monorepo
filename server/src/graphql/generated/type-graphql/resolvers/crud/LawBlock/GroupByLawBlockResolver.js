"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByLawBlockArgs_1 = require("./args/GroupByLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const LawBlockGroupBy_1 = require("../../outputs/LawBlockGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByLawBlockResolver = class GroupByLawBlockResolver {
    async groupByLawBlock(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [LawBlockGroupBy_1.LawBlockGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByLawBlockArgs_1.GroupByLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByLawBlockResolver.prototype, "groupByLawBlock", null);
GroupByLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], GroupByLawBlockResolver);
exports.GroupByLawBlockResolver = GroupByLawBlockResolver;
