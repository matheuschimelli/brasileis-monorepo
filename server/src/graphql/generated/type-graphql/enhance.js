"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = (0, tslib_1.__importStar)(require("tslib"));
const crudResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = (0, tslib_1.__importStar)(require("./resolvers/crud/args.index"));
const actionResolvers = (0, tslib_1.__importStar)(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = (0, tslib_1.__importStar)(require("./resolvers/relations/resolvers.index"));
const models = (0, tslib_1.__importStar)(require("./models"));
const outputTypes = (0, tslib_1.__importStar)(require("./resolvers/outputs"));
const inputTypes = (0, tslib_1.__importStar)(require("./resolvers/inputs"));
const crudResolversMap = {
    BlockProperty: crudResolvers.BlockPropertyCrudResolver,
    LawBlock: crudResolvers.LawBlockCrudResolver,
    Post: crudResolvers.PostCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    BlockProperty: {
        blockProperty: actionResolvers.FindUniqueBlockPropertyResolver,
        findFirstBlockProperty: actionResolvers.FindFirstBlockPropertyResolver,
        blockProperties: actionResolvers.FindManyBlockPropertyResolver,
        createBlockProperty: actionResolvers.CreateBlockPropertyResolver,
        createManyBlockProperty: actionResolvers.CreateManyBlockPropertyResolver,
        deleteBlockProperty: actionResolvers.DeleteBlockPropertyResolver,
        updateBlockProperty: actionResolvers.UpdateBlockPropertyResolver,
        deleteManyBlockProperty: actionResolvers.DeleteManyBlockPropertyResolver,
        updateManyBlockProperty: actionResolvers.UpdateManyBlockPropertyResolver,
        upsertBlockProperty: actionResolvers.UpsertBlockPropertyResolver,
        aggregateBlockProperty: actionResolvers.AggregateBlockPropertyResolver,
        groupByBlockProperty: actionResolvers.GroupByBlockPropertyResolver
    },
    LawBlock: {
        lawBlock: actionResolvers.FindUniqueLawBlockResolver,
        findFirstLawBlock: actionResolvers.FindFirstLawBlockResolver,
        lawBlocks: actionResolvers.FindManyLawBlockResolver,
        createLawBlock: actionResolvers.CreateLawBlockResolver,
        createManyLawBlock: actionResolvers.CreateManyLawBlockResolver,
        deleteLawBlock: actionResolvers.DeleteLawBlockResolver,
        updateLawBlock: actionResolvers.UpdateLawBlockResolver,
        deleteManyLawBlock: actionResolvers.DeleteManyLawBlockResolver,
        updateManyLawBlock: actionResolvers.UpdateManyLawBlockResolver,
        upsertLawBlock: actionResolvers.UpsertLawBlockResolver,
        aggregateLawBlock: actionResolvers.AggregateLawBlockResolver,
        groupByLawBlock: actionResolvers.GroupByLawBlockResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver
    },
    Profile: {
        profile: actionResolvers.FindUniqueProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        createProfile: actionResolvers.CreateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        deleteProfile: actionResolvers.DeleteProfileResolver,
        updateProfile: actionResolvers.UpdateProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        upsertProfile: actionResolvers.UpsertProfileResolver,
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver
    },
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    BlockProperty: ["blockProperty", "findFirstBlockProperty", "blockProperties", "createBlockProperty", "createManyBlockProperty", "deleteBlockProperty", "updateBlockProperty", "deleteManyBlockProperty", "updateManyBlockProperty", "upsertBlockProperty", "aggregateBlockProperty", "groupByBlockProperty"],
    LawBlock: ["lawBlock", "findFirstLawBlock", "lawBlocks", "createLawBlock", "createManyLawBlock", "deleteLawBlock", "updateLawBlock", "deleteManyLawBlock", "updateManyLawBlock", "upsertLawBlock", "aggregateLawBlock", "groupByLawBlock"],
    Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
    Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniqueBlockPropertyArgs: ["where"],
    FindFirstBlockPropertyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBlockPropertyArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateBlockPropertyArgs: ["data"],
    CreateManyBlockPropertyArgs: ["data", "skipDuplicates"],
    DeleteBlockPropertyArgs: ["where"],
    UpdateBlockPropertyArgs: ["data", "where"],
    DeleteManyBlockPropertyArgs: ["where"],
    UpdateManyBlockPropertyArgs: ["data", "where"],
    UpsertBlockPropertyArgs: ["where", "create", "update"],
    AggregateBlockPropertyArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByBlockPropertyArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueLawBlockArgs: ["where"],
    FindFirstLawBlockArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyLawBlockArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateLawBlockArgs: ["data"],
    CreateManyLawBlockArgs: ["data", "skipDuplicates"],
    DeleteLawBlockArgs: ["where"],
    UpdateLawBlockArgs: ["data", "where"],
    DeleteManyLawBlockArgs: ["where"],
    UpdateManyLawBlockArgs: ["data", "where"],
    UpsertLawBlockArgs: ["where", "create", "update"],
    AggregateLawBlockArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByLawBlockArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniquePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePostArgs: ["data"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    DeletePostArgs: ["where"],
    UpdatePostArgs: ["data", "where"],
    DeleteManyPostArgs: ["where"],
    UpdateManyPostArgs: ["data", "where"],
    UpsertPostArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProfileArgs: ["data"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    DeleteProfileArgs: ["where"],
    UpdateProfileArgs: ["data", "where"],
    DeleteManyProfileArgs: ["where"],
    UpdateManyProfileArgs: ["data", "where"],
    UpsertProfileArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, void 0);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, void 0);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, void 0);
            tslib.__decorate(decorators, actionTarget, resolverActionName, void 0);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    BlockProperty: relationResolvers.BlockPropertyRelationsResolver,
    LawBlock: relationResolvers.LawBlockRelationsResolver,
    Post: relationResolvers.PostRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    User: relationResolvers.UserRelationsResolver
};
const relationResolversInfo = {
    BlockProperty: ["LawBlock"],
    LawBlock: ["content", "properties", "LawBlock"],
    Post: ["User"],
    Profile: ["User"],
    User: ["profile", "posts"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, void 0);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, void 0);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName);
        }
    }
}
const modelsInfo = {
    BlockProperty: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    LawBlock: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    Post: ["id", "title", "createdAt", "content", "published", "authorId"],
    Profile: ["id", "bio", "picture", "userId"],
    User: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateBlockProperty: ["_count", "_avg", "_sum", "_min", "_max"],
    BlockPropertyGroupBy: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateLawBlock: ["_count", "_min", "_max"],
    LawBlockGroupBy: ["id", "type", "createdAt", "updatedAt", "lawBlockId", "_count", "_min", "_max"],
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "title", "createdAt", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_min", "_max"],
    ProfileGroupBy: ["id", "bio", "picture", "userId", "_count", "_min", "_max"],
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role", "_count", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    BlockPropertyCountAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId", "_all"],
    BlockPropertyAvgAggregate: ["year"],
    BlockPropertySumAggregate: ["year"],
    BlockPropertyMinAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    BlockPropertyMaxAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    LawBlockCount: ["content"],
    LawBlockCountAggregate: ["id", "type", "createdAt", "updatedAt", "lawBlockId", "_all"],
    LawBlockMinAggregate: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    LawBlockMaxAggregate: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    PostCountAggregate: ["id", "title", "createdAt", "content", "published", "authorId", "_all"],
    PostAvgAggregate: ["id"],
    PostSumAggregate: ["id"],
    PostMinAggregate: ["id", "title", "createdAt", "content", "published", "authorId"],
    PostMaxAggregate: ["id", "title", "createdAt", "content", "published", "authorId"],
    ProfileCountAggregate: ["id", "bio", "picture", "userId", "_all"],
    ProfileMinAggregate: ["id", "bio", "picture", "userId"],
    ProfileMaxAggregate: ["id", "bio", "picture", "userId"],
    UserCount: ["posts"],
    UserCountAggregate: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role", "_all"],
    UserMinAggregate: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role"],
    UserMaxAggregate: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    BlockPropertyWhereInput: ["AND", "OR", "NOT", "id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId", "LawBlock"],
    BlockPropertyOrderByWithRelationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId", "LawBlock"],
    BlockPropertyWhereUniqueInput: ["id", "lawBlockId"],
    BlockPropertyOrderByWithAggregationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId", "_count", "_avg", "_max", "_min", "_sum"],
    BlockPropertyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    LawBlockWhereInput: ["AND", "OR", "NOT", "id", "type", "content", "properties", "createdAt", "updatedAt", "LawBlock", "lawBlockId"],
    LawBlockOrderByWithRelationInput: ["id", "type", "content", "properties", "createdAt", "updatedAt", "LawBlock", "lawBlockId"],
    LawBlockWhereUniqueInput: ["id"],
    LawBlockOrderByWithAggregationInput: ["id", "type", "createdAt", "updatedAt", "lawBlockId", "_count", "_max", "_min"],
    LawBlockScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "type", "createdAt", "updatedAt", "lawBlockId"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "content", "published", "authorId", "User"],
    PostOrderByWithRelationInput: ["id", "title", "createdAt", "content", "published", "authorId", "User"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "title", "createdAt", "content", "published", "authorId", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "content", "published", "authorId"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "picture", "userId", "User"],
    ProfileOrderByWithRelationInput: ["id", "bio", "picture", "userId", "User"],
    ProfileWhereUniqueInput: ["id", "userId"],
    ProfileOrderByWithAggregationInput: ["id", "bio", "picture", "userId", "_count", "_max", "_min"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "picture", "userId"],
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role", "profile", "posts"],
    UserOrderByWithRelationInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role", "profile", "posts"],
    UserWhereUniqueInput: ["id", "email", "googleId"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role"],
    BlockPropertyCreateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "LawBlock"],
    BlockPropertyUpdateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "LawBlock"],
    BlockPropertyCreateManyInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    BlockPropertyUpdateManyMutationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString"],
    LawBlockCreateInput: ["id", "type", "createdAt", "updatedAt", "content", "properties", "LawBlock"],
    LawBlockUpdateInput: ["id", "type", "createdAt", "updatedAt", "content", "properties", "LawBlock"],
    LawBlockCreateManyInput: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    LawBlockUpdateManyMutationInput: ["id", "type", "createdAt", "updatedAt"],
    PostCreateInput: ["title", "createdAt", "content", "published", "User"],
    PostUpdateInput: ["title", "createdAt", "content", "published", "User"],
    PostCreateManyInput: ["id", "title", "createdAt", "content", "published", "authorId"],
    PostUpdateManyMutationInput: ["title", "createdAt", "content", "published"],
    ProfileCreateInput: ["id", "bio", "picture", "User"],
    ProfileUpdateInput: ["id", "bio", "picture", "User"],
    ProfileCreateManyInput: ["id", "bio", "picture", "userId"],
    ProfileUpdateManyMutationInput: ["id", "bio", "picture"],
    UserCreateInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "profile", "posts"],
    UserUpdateInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "profile", "posts"],
    UserCreateManyInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens"],
    UserUpdateManyMutationInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BoolFilter: ["equals", "not"],
    LawBlockRelationFilter: ["is", "isNot"],
    BlockPropertyCountOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    BlockPropertyAvgOrderByAggregateInput: ["year"],
    BlockPropertyMaxOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    BlockPropertyMinOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString", "lawBlockId"],
    BlockPropertySumOrderByAggregateInput: ["year"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    EnumBlockTypeFilter: ["equals", "in", "notIn", "not"],
    LawBlockListRelationFilter: ["every", "some", "none"],
    BlockPropertyRelationFilter: ["is", "isNot"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    LawBlockOrderByRelationAggregateInput: ["_count"],
    LawBlockCountOrderByAggregateInput: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    LawBlockMaxOrderByAggregateInput: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    LawBlockMinOrderByAggregateInput: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
    EnumBlockTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    PostCountOrderByAggregateInput: ["id", "title", "createdAt", "content", "published", "authorId"],
    PostAvgOrderByAggregateInput: ["id"],
    PostMaxOrderByAggregateInput: ["id", "title", "createdAt", "content", "published", "authorId"],
    PostMinOrderByAggregateInput: ["id", "title", "createdAt", "content", "published", "authorId"],
    PostSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ProfileCountOrderByAggregateInput: ["id", "bio", "picture", "userId"],
    ProfileMaxOrderByAggregateInput: ["id", "bio", "picture", "userId"],
    ProfileMinOrderByAggregateInput: ["id", "bio", "picture", "userId"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    EnumUserRoleFilter: ["equals", "in", "notIn", "not"],
    ProfileRelationFilter: ["is", "isNot"],
    PostListRelationFilter: ["every", "some", "none"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "createdAt", "updatedAt", "role"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role"],
    EnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    LawBlockCreateNestedOneWithoutPropertiesInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    BoolFieldUpdateOperationsInput: ["set"],
    LawBlockUpdateOneRequiredWithoutPropertiesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    LawBlockCreateNestedManyWithoutLawBlockInput: ["create", "connectOrCreate", "createMany", "connect"],
    BlockPropertyCreateNestedOneWithoutLawBlockInput: ["create", "connectOrCreate", "connect"],
    LawBlockCreateNestedOneWithoutContentInput: ["create", "connectOrCreate", "connect"],
    EnumBlockTypeFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    LawBlockUpdateManyWithoutLawBlockInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    BlockPropertyUpdateOneWithoutLawBlockInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    LawBlockUpdateOneWithoutContentInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreatetokensInput: ["set"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    PostCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumUserRoleFieldUpdateOperationsInput: ["set"],
    UserUpdatetokensInput: ["set", "push"],
    ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    PostUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UserCreateManytokensInput: ["set"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedEnumBlockTypeFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumBlockTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumUserRoleFilter: ["equals", "in", "notIn", "not"],
    NestedEnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    LawBlockCreateWithoutPropertiesInput: ["id", "type", "createdAt", "updatedAt", "content", "LawBlock"],
    LawBlockCreateOrConnectWithoutPropertiesInput: ["where", "create"],
    LawBlockUpsertWithoutPropertiesInput: ["update", "create"],
    LawBlockUpdateWithoutPropertiesInput: ["id", "type", "createdAt", "updatedAt", "content", "LawBlock"],
    LawBlockCreateWithoutLawBlockInput: ["id", "type", "createdAt", "updatedAt", "content", "properties"],
    LawBlockCreateOrConnectWithoutLawBlockInput: ["where", "create"],
    LawBlockCreateManyLawBlockInputEnvelope: ["data", "skipDuplicates"],
    BlockPropertyCreateWithoutLawBlockInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString"],
    BlockPropertyCreateOrConnectWithoutLawBlockInput: ["where", "create"],
    LawBlockCreateWithoutContentInput: ["id", "type", "createdAt", "updatedAt", "properties", "LawBlock"],
    LawBlockCreateOrConnectWithoutContentInput: ["where", "create"],
    LawBlockUpsertWithWhereUniqueWithoutLawBlockInput: ["where", "update", "create"],
    LawBlockUpdateWithWhereUniqueWithoutLawBlockInput: ["where", "data"],
    LawBlockUpdateManyWithWhereWithoutLawBlockInput: ["where", "data"],
    LawBlockScalarWhereInput: ["AND", "OR", "NOT", "id", "type", "createdAt", "updatedAt", "lawBlockId"],
    BlockPropertyUpsertWithoutLawBlockInput: ["update", "create"],
    BlockPropertyUpdateWithoutLawBlockInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "membersOnly", "searchString"],
    LawBlockUpsertWithoutContentInput: ["update", "create"],
    LawBlockUpdateWithoutContentInput: ["id", "type", "createdAt", "updatedAt", "properties", "LawBlock"],
    UserCreateWithoutPostsInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "profile"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "profile"],
    UserCreateWithoutProfileInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "posts"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["id", "name", "email", "username", "admin", "googleId", "createdAt", "updatedAt", "role", "tokens", "posts"],
    ProfileCreateWithoutUserInput: ["id", "bio", "picture"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    PostCreateWithoutUserInput: ["title", "createdAt", "content", "published"],
    PostCreateOrConnectWithoutUserInput: ["where", "create"],
    PostCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["id", "bio", "picture"],
    PostUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "content", "published", "authorId"],
    LawBlockCreateManyLawBlockInput: ["id", "type", "createdAt", "updatedAt"],
    LawBlockUpdateWithoutLawBlockInput: ["id", "type", "createdAt", "updatedAt", "content", "properties"],
    PostCreateManyUserInput: ["id", "title", "createdAt", "content", "published"],
    PostUpdateWithoutUserInput: ["title", "createdAt", "content", "published"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
