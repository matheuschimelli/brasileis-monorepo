import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBlockPropertyArgs } from "./args/FindUniqueBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class FindUniqueBlockPropertyResolver {
    blockProperty(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBlockPropertyArgs): Promise<BlockProperty | null>;
}
