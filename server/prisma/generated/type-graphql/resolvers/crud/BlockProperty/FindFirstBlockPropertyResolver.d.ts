import { GraphQLResolveInfo } from "graphql";
import { FindFirstBlockPropertyArgs } from "./args/FindFirstBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class FindFirstBlockPropertyResolver {
    findFirstBlockProperty(ctx: any, info: GraphQLResolveInfo, args: FindFirstBlockPropertyArgs): Promise<BlockProperty | null>;
}
