"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLawBlockResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateLawBlockArgs_1 = require("./args/CreateLawBlockArgs");
const LawBlock_1 = require("../../../models/LawBlock");
const helpers_1 = require("../../../helpers");
let CreateLawBlockResolver = class CreateLawBlockResolver {
    async createLawBlock(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lawBlock.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => LawBlock_1.LawBlock, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateLawBlockArgs_1.CreateLawBlockArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateLawBlockResolver.prototype, "createLawBlock", null);
CreateLawBlockResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => LawBlock_1.LawBlock)
], CreateLawBlockResolver);
exports.CreateLawBlockResolver = CreateLawBlockResolver;
