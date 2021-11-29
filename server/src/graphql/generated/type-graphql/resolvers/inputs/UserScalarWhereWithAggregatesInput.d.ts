import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumUserRoleWithAggregatesFilter } from "../inputs/EnumUserRoleWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    username?: StringNullableWithAggregatesFilter | undefined;
    tokens?: StringNullableListFilter | undefined;
    admin?: BoolWithAggregatesFilter | undefined;
    googleId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    role?: EnumUserRoleWithAggregatesFilter | undefined;
}
