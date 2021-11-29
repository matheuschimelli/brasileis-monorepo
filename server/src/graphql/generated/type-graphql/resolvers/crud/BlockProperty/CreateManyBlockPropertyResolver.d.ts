import { GraphQLResolveInfo } from "graphql";
import { CreateManyBlockPropertyArgs } from "./args/CreateManyBlockPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBlockPropertyResolver {
    createManyBlockProperty(ctx: any, info: GraphQLResolveInfo, args: CreateManyBlockPropertyArgs): Promise<AffectedRowsOutput>;
}
