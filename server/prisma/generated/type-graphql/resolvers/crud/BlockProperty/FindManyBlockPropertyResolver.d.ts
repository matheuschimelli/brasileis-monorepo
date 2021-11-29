import { GraphQLResolveInfo } from "graphql";
import { FindManyBlockPropertyArgs } from "./args/FindManyBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class FindManyBlockPropertyResolver {
    blockProperties(ctx: any, info: GraphQLResolveInfo, args: FindManyBlockPropertyArgs): Promise<BlockProperty[]>;
}
