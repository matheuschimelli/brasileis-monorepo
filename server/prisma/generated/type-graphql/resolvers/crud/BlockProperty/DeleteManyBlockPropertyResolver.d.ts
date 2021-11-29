import { GraphQLResolveInfo } from "graphql";
import { DeleteManyBlockPropertyArgs } from "./args/DeleteManyBlockPropertyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBlockPropertyResolver {
    deleteManyBlockProperty(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBlockPropertyArgs): Promise<AffectedRowsOutput>;
}
