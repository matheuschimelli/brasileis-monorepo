import { GraphQLResolveInfo } from "graphql";
import { UpdateManyBlockPropertyArgs } from "./args/UpdateManyBlockPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBlockPropertyResolver {
    updateManyBlockProperty(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBlockPropertyArgs): Promise<AffectedRowsOutput>;
}
