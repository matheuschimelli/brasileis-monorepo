import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateBlockPropertyArgs } from "./args/AggregateBlockPropertyArgs";
import { CreateBlockPropertyArgs } from "./args/CreateBlockPropertyArgs";
import { CreateManyBlockPropertyArgs } from "./args/CreateManyBlockPropertyArgs";
import { DeleteBlockPropertyArgs } from "./args/DeleteBlockPropertyArgs";
import { DeleteManyBlockPropertyArgs } from "./args/DeleteManyBlockPropertyArgs";
import { FindFirstBlockPropertyArgs } from "./args/FindFirstBlockPropertyArgs";
import { FindManyBlockPropertyArgs } from "./args/FindManyBlockPropertyArgs";
import { FindUniqueBlockPropertyArgs } from "./args/FindUniqueBlockPropertyArgs";
import { GroupByBlockPropertyArgs } from "./args/GroupByBlockPropertyArgs";
import { UpdateBlockPropertyArgs } from "./args/UpdateBlockPropertyArgs";
import { UpdateManyBlockPropertyArgs } from "./args/UpdateManyBlockPropertyArgs";
import { UpsertBlockPropertyArgs } from "./args/UpsertBlockPropertyArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { BlockProperty } from "../../../models/BlockProperty";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBlockProperty } from "../../outputs/AggregateBlockProperty";
import { BlockPropertyGroupBy } from "../../outputs/BlockPropertyGroupBy";

@TypeGraphQL.Resolver(_of => BlockProperty)
export class BlockPropertyCrudResolver {
  @TypeGraphQL.Query(_returns => BlockProperty, {
    nullable: true
  })
  async blockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueBlockPropertyArgs): Promise<BlockProperty | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => BlockProperty, {
    nullable: true
  })
  async findFirstBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstBlockPropertyArgs): Promise<BlockProperty | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [BlockProperty], {
    nullable: false
  })
  async blockProperties(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyBlockPropertyArgs): Promise<BlockProperty[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BlockProperty, {
    nullable: false
  })
  async createBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateBlockPropertyArgs): Promise<BlockProperty> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyBlockPropertyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BlockProperty, {
    nullable: true
  })
  async deleteBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteBlockPropertyArgs): Promise<BlockProperty | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BlockProperty, {
    nullable: true
  })
  async updateBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateBlockPropertyArgs): Promise<BlockProperty | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyBlockPropertyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyBlockPropertyArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => BlockProperty, {
    nullable: false
  })
  async upsertBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertBlockPropertyArgs): Promise<BlockProperty> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateBlockProperty, {
    nullable: false
  })
  async aggregateBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBlockPropertyArgs): Promise<AggregateBlockProperty> {
    return getPrismaFromContext(ctx).blockProperty.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [BlockPropertyGroupBy], {
    nullable: false
  })
  async groupByBlockProperty(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByBlockPropertyArgs): Promise<BlockPropertyGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).blockProperty.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
