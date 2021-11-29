import { GraphQLResolveInfo } from "graphql";
import { UpdateBlockPropertyArgs } from "./args/UpdateBlockPropertyArgs";
import { BlockProperty } from "../../../models/BlockProperty";
export declare class UpdateBlockPropertyResolver {
    updateBlockProperty(ctx: any, info: GraphQLResolveInfo, args: UpdateBlockPropertyArgs): Promise<BlockProperty | null>;
}
