"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateLawBlockArgs_1 = require("./args/AggregateLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const AggregateLawBlock_1 = require("../../outputs/AggregateLawBlock");
const helpers_1 = require("../../../helpers");
let AggregateLawBlockResolver = class AggregateLawBlockResolver {
    async aggregateLawBlock(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateLawBlock_1.AggregateLawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateLawBlockArgs_1.AggregateLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateLawBlockResolver.prototype, "aggregateLawBlock", null);
AggregateLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], AggregateLawBlockResolver);
exports.AggregateLawBlockResolver = AggregateLawBlockResolver;
