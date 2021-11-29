import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProfileWhereInput {
    AND?: ProfileWhereInput[] | undefined;
    OR?: ProfileWhereInput[] | undefined;
    NOT?: ProfileWhereInput[] | undefined;
    id?: StringFilter | undefined;
    bio?: StringNullableFilter | undefined;
    picture?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    User?: UserRelationFilter | undefined;
}
