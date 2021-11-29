import { GraphQLResolveInfo } from "graphql";
import { UpsertBlockPropertyArgs } from "./args/UpsertBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class UpsertBlockPropertyResolver {
    upsertBlockProperty(ctx: any, info: GraphQLResolveInfo, args: UpsertBlockPropertyArgs): Promise<BlockProperty>;
}
