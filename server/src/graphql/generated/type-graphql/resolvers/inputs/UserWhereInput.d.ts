import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    email?: StringFilter | undefined;
    username?: StringNullableFilter | undefined;
    tokens?: StringNullableListFilter | undefined;
    admin?: BoolFilter | undefined;
    googleId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    role?: EnumUserRoleFilter | undefined;
    profile?: ProfileRelationFilter | undefined;
    posts?: PostListRelationFilter | undefined;
}
