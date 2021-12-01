import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  BlockProperty: crudResolvers.BlockPropertyCrudResolver,
  LawBlock: crudResolvers.LawBlockCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Customer: crudResolvers.CustomerCrudResolver,
  Subscription: crudResolvers.SubscriptionCrudResolver
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
  },
  Customer: {
    customer: actionResolvers.FindUniqueCustomerResolver,
    findFirstCustomer: actionResolvers.FindFirstCustomerResolver,
    customers: actionResolvers.FindManyCustomerResolver,
    createCustomer: actionResolvers.CreateCustomerResolver,
    createManyCustomer: actionResolvers.CreateManyCustomerResolver,
    deleteCustomer: actionResolvers.DeleteCustomerResolver,
    updateCustomer: actionResolvers.UpdateCustomerResolver,
    deleteManyCustomer: actionResolvers.DeleteManyCustomerResolver,
    updateManyCustomer: actionResolvers.UpdateManyCustomerResolver,
    upsertCustomer: actionResolvers.UpsertCustomerResolver,
    aggregateCustomer: actionResolvers.AggregateCustomerResolver,
    groupByCustomer: actionResolvers.GroupByCustomerResolver
  },
  Subscription: {
    subscription: actionResolvers.FindUniqueSubscriptionResolver,
    findFirstSubscription: actionResolvers.FindFirstSubscriptionResolver,
    subscriptions: actionResolvers.FindManySubscriptionResolver,
    createSubscription: actionResolvers.CreateSubscriptionResolver,
    createManySubscription: actionResolvers.CreateManySubscriptionResolver,
    deleteSubscription: actionResolvers.DeleteSubscriptionResolver,
    updateSubscription: actionResolvers.UpdateSubscriptionResolver,
    deleteManySubscription: actionResolvers.DeleteManySubscriptionResolver,
    updateManySubscription: actionResolvers.UpdateManySubscriptionResolver,
    upsertSubscription: actionResolvers.UpsertSubscriptionResolver,
    aggregateSubscription: actionResolvers.AggregateSubscriptionResolver,
    groupBySubscription: actionResolvers.GroupBySubscriptionResolver
  }
};
const crudResolversInfo = {
  BlockProperty: ["blockProperty", "findFirstBlockProperty", "blockProperties", "createBlockProperty", "createManyBlockProperty", "deleteBlockProperty", "updateBlockProperty", "deleteManyBlockProperty", "updateManyBlockProperty", "upsertBlockProperty", "aggregateBlockProperty", "groupByBlockProperty"],
  LawBlock: ["lawBlock", "findFirstLawBlock", "lawBlocks", "createLawBlock", "createManyLawBlock", "deleteLawBlock", "updateLawBlock", "deleteManyLawBlock", "updateManyLawBlock", "upsertLawBlock", "aggregateLawBlock", "groupByLawBlock"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Customer: ["customer", "findFirstCustomer", "customers", "createCustomer", "createManyCustomer", "deleteCustomer", "updateCustomer", "deleteManyCustomer", "updateManyCustomer", "upsertCustomer", "aggregateCustomer", "groupByCustomer"],
  Subscription: ["subscription", "findFirstSubscription", "subscriptions", "createSubscription", "createManySubscription", "deleteSubscription", "updateSubscription", "deleteManySubscription", "updateManySubscription", "upsertSubscription", "aggregateSubscription", "groupBySubscription"]
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
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCustomerArgs: ["where"],
  FindFirstCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCustomerArgs: ["data"],
  CreateManyCustomerArgs: ["data", "skipDuplicates"],
  DeleteCustomerArgs: ["where"],
  UpdateCustomerArgs: ["data", "where"],
  DeleteManyCustomerArgs: ["where"],
  UpdateManyCustomerArgs: ["data", "where"],
  UpsertCustomerArgs: ["where", "create", "update"],
  AggregateCustomerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCustomerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSubscriptionArgs: ["where"],
  FindFirstSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSubscriptionArgs: ["data"],
  CreateManySubscriptionArgs: ["data", "skipDuplicates"],
  DeleteSubscriptionArgs: ["where"],
  UpdateSubscriptionArgs: ["data", "where"],
  DeleteManySubscriptionArgs: ["where"],
  UpdateManySubscriptionArgs: ["data", "where"],
  UpsertSubscriptionArgs: ["where", "create", "update"],
  AggregateSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySubscriptionArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, void 0);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, void 0);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, void 0);
      tslib.__decorate(decorators, actionTarget, resolverActionName, void 0);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  BlockProperty: relationResolvers.BlockPropertyRelationsResolver,
  LawBlock: relationResolvers.LawBlockRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Customer: relationResolvers.CustomerRelationsResolver,
  Subscription: relationResolvers.SubscriptionRelationsResolver
};
const relationResolversInfo = {
  BlockProperty: ["LawBlock"],
  LawBlock: ["content", "properties", "LawBlock"],
  Post: ["User"],
  Profile: ["User"],
  User: ["profile", "posts", "subscriptions", "Customer"],
  Customer: ["user"],
  Subscription: ["user"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, void 0);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, void 0);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
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
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName);
    }
  }
}

const modelsInfo = {
  BlockProperty: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
  LawBlock: ["id", "type", "createdAt", "updatedAt", "lawBlockId"],
  Post: ["id", "title", "createdAt", "content", "published", "authorId"],
  Profile: ["id", "bio", "picture", "userId"],
  User: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  Customer: ["id", "stripeId", "userId"],
  Subscription: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateBlockProperty: ["_count", "_avg", "_sum", "_min", "_max"],
  BlockPropertyGroupBy: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateLawBlock: ["_count", "_min", "_max"],
  LawBlockGroupBy: ["id", "type", "createdAt", "updatedAt", "lawBlockId", "_count", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "title", "createdAt", "content", "published", "authorId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProfile: ["_count", "_min", "_max"],
  ProfileGroupBy: ["id", "bio", "picture", "userId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateCustomer: ["_count", "_min", "_max"],
  CustomerGroupBy: ["id", "stripeId", "userId", "_count", "_min", "_max"],
  AggregateSubscription: ["_count", "_avg", "_sum", "_min", "_max"],
  SubscriptionGroupBy: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  BlockPropertyCountAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId", "_all"],
  BlockPropertyAvgAggregate: ["year"],
  BlockPropertySumAggregate: ["year"],
  BlockPropertyMinAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
  BlockPropertyMaxAggregate: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
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
  UserCount: ["posts", "subscriptions"],
  UserCountAggregate: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "_all"],
  UserMinAggregate: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  CustomerCountAggregate: ["id", "stripeId", "userId", "_all"],
  CustomerMinAggregate: ["id", "stripeId", "userId"],
  CustomerMaxAggregate: ["id", "stripeId", "userId"],
  SubscriptionCountAggregate: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId", "_all"],
  SubscriptionAvgAggregate: ["quantity"],
  SubscriptionSumAggregate: ["quantity"],
  SubscriptionMinAggregate: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionMaxAggregate: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  BlockPropertyWhereInput: ["AND", "OR", "NOT", "id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId", "LawBlock"],
  BlockPropertyOrderByWithRelationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId", "LawBlock"],
  BlockPropertyWhereUniqueInput: ["id", "lawBlockId"],
  BlockPropertyOrderByWithAggregationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId", "_count", "_avg", "_max", "_min", "_sum"],
  BlockPropertyScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "profile", "posts", "subscriptions", "Customer", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "profile", "posts", "subscriptions", "Customer", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email", "googleId"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  CustomerWhereInput: ["AND", "OR", "NOT", "id", "stripeId", "user", "userId"],
  CustomerOrderByWithRelationInput: ["id", "stripeId", "user", "userId"],
  CustomerWhereUniqueInput: ["id", "stripeId", "userId"],
  CustomerOrderByWithAggregationInput: ["id", "stripeId", "userId", "_count", "_max", "_min"],
  CustomerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "stripeId", "userId"],
  SubscriptionWhereInput: ["AND", "OR", "NOT", "id", "user", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionOrderByWithRelationInput: ["id", "user", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionWhereUniqueInput: ["id", "stripeSubscriptionId"],
  SubscriptionOrderByWithAggregationInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  SubscriptionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  BlockPropertyCreateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "LawBlock"],
  BlockPropertyUpdateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "LawBlock"],
  BlockPropertyCreateManyInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
  BlockPropertyUpdateManyMutationInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString"],
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
  UserCreateInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "subscriptions", "Customer"],
  UserUpdateInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "subscriptions", "Customer"],
  UserCreateManyInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens"],
  UserUpdateManyMutationInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens"],
  CustomerCreateInput: ["id", "stripeId", "user"],
  CustomerUpdateInput: ["id", "stripeId", "user"],
  CustomerCreateManyInput: ["id", "stripeId", "userId"],
  CustomerUpdateManyMutationInput: ["id", "stripeId"],
  SubscriptionCreateInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "user"],
  SubscriptionUpdateInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "user"],
  SubscriptionCreateManyInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionUpdateManyMutationInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  LawBlockRelationFilter: ["is", "isNot"],
  BlockPropertyCountOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
  BlockPropertyAvgOrderByAggregateInput: ["year"],
  BlockPropertyMaxOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
  BlockPropertyMinOrderByAggregateInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString", "lawBlockId"],
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
  BoolNullableFilter: ["equals", "not"],
  EnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  ProfileRelationFilter: ["is", "isNot"],
  PostListRelationFilter: ["every", "some", "none"],
  SubscriptionListRelationFilter: ["every", "some", "none"],
  CustomerRelationFilter: ["is", "isNot"],
  PostOrderByRelationAggregateInput: ["_count"],
  SubscriptionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "username", "tokens", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CustomerCountOrderByAggregateInput: ["id", "stripeId", "userId"],
  CustomerMaxOrderByAggregateInput: ["id", "stripeId", "userId"],
  CustomerMinOrderByAggregateInput: ["id", "stripeId", "userId"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SubscriptionCountOrderByAggregateInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionAvgOrderByAggregateInput: ["quantity"],
  SubscriptionMaxOrderByAggregateInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionMinOrderByAggregateInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  SubscriptionSumOrderByAggregateInput: ["quantity"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
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
  SubscriptionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  EnumUserRoleFieldUpdateOperationsInput: ["set"],
  UserUpdatetokensInput: ["set", "push"],
  ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PostUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SubscriptionUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CustomerUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserCreateManytokensInput: ["set"],
  UserCreateNestedOneWithoutCustomerInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutSubscriptionsInput: ["create", "connectOrCreate", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutSubscriptionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedBoolNullableFilter: ["equals", "not"],
  NestedEnumUserRoleFilter: ["equals", "in", "notIn", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumUserRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  LawBlockCreateWithoutPropertiesInput: ["id", "type", "createdAt", "updatedAt", "content", "LawBlock"],
  LawBlockCreateOrConnectWithoutPropertiesInput: ["where", "create"],
  LawBlockUpsertWithoutPropertiesInput: ["update", "create"],
  LawBlockUpdateWithoutPropertiesInput: ["id", "type", "createdAt", "updatedAt", "content", "LawBlock"],
  LawBlockCreateWithoutLawBlockInput: ["id", "type", "createdAt", "updatedAt", "content", "properties"],
  LawBlockCreateOrConnectWithoutLawBlockInput: ["where", "create"],
  LawBlockCreateManyLawBlockInputEnvelope: ["data", "skipDuplicates"],
  BlockPropertyCreateWithoutLawBlockInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString"],
  BlockPropertyCreateOrConnectWithoutLawBlockInput: ["where", "create"],
  LawBlockCreateWithoutContentInput: ["id", "type", "createdAt", "updatedAt", "properties", "LawBlock"],
  LawBlockCreateOrConnectWithoutContentInput: ["where", "create"],
  LawBlockUpsertWithWhereUniqueWithoutLawBlockInput: ["where", "update", "create"],
  LawBlockUpdateWithWhereUniqueWithoutLawBlockInput: ["where", "data"],
  LawBlockUpdateManyWithWhereWithoutLawBlockInput: ["where", "data"],
  LawBlockScalarWhereInput: ["AND", "OR", "NOT", "id", "type", "createdAt", "updatedAt", "lawBlockId"],
  BlockPropertyUpsertWithoutLawBlockInput: ["update", "create"],
  BlockPropertyUpdateWithoutLawBlockInput: ["id", "value", "title", "number", "identifier", "comment", "year", "author", "subsOnly", "searchString"],
  LawBlockUpsertWithoutContentInput: ["update", "create"],
  LawBlockUpdateWithoutContentInput: ["id", "type", "createdAt", "updatedAt", "properties", "LawBlock"],
  UserCreateWithoutPostsInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "subscriptions", "Customer"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "subscriptions", "Customer"],
  UserCreateWithoutProfileInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "posts", "subscriptions", "Customer"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "posts", "subscriptions", "Customer"],
  ProfileCreateWithoutUserInput: ["id", "bio", "picture"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateWithoutUserInput: ["title", "createdAt", "content", "published"],
  PostCreateOrConnectWithoutUserInput: ["where", "create"],
  PostCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SubscriptionCreateWithoutUserInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt"],
  SubscriptionCreateOrConnectWithoutUserInput: ["where", "create"],
  SubscriptionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  CustomerCreateWithoutUserInput: ["id", "stripeId"],
  CustomerCreateOrConnectWithoutUserInput: ["where", "create"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["id", "bio", "picture"],
  PostUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "createdAt", "content", "published", "authorId"],
  SubscriptionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SubscriptionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SubscriptionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SubscriptionScalarWhereInput: ["AND", "OR", "NOT", "id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt", "userId"],
  CustomerUpsertWithoutUserInput: ["update", "create"],
  CustomerUpdateWithoutUserInput: ["id", "stripeId"],
  UserCreateWithoutCustomerInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "subscriptions"],
  UserCreateOrConnectWithoutCustomerInput: ["where", "create"],
  UserUpsertWithoutCustomerInput: ["update", "create"],
  UserUpdateWithoutCustomerInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "subscriptions"],
  UserCreateWithoutSubscriptionsInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "Customer"],
  UserCreateOrConnectWithoutSubscriptionsInput: ["where", "create"],
  UserUpsertWithoutSubscriptionsInput: ["update", "create"],
  UserUpdateWithoutSubscriptionsInput: ["id", "name", "email", "username", "admin", "googleId", "isPro", "role", "createdAt", "updatedAt", "tokens", "profile", "posts", "Customer"],
  LawBlockCreateManyLawBlockInput: ["id", "type", "createdAt", "updatedAt"],
  LawBlockUpdateWithoutLawBlockInput: ["id", "type", "createdAt", "updatedAt", "content", "properties"],
  PostCreateManyUserInput: ["id", "title", "createdAt", "content", "published"],
  SubscriptionCreateManyUserInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt"],
  PostUpdateWithoutUserInput: ["title", "createdAt", "content", "published"],
  SubscriptionUpdateWithoutUserInput: ["id", "isActive", "stripePaymentId", "stripeTransactionId", "stripeSubscriptionId", "customerId", "startDate", "endDate", "quantity", "cancelAtPeriodEnd", "cancelAt", "canceledAt", "created", "endedAt", "trialStart", "trialEnd", "invoiceUrl", "receiptUrl", "pdfInvoice", "urlInvoice", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

