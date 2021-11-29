import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProfileScalarWhereWithAggregatesInput {
    AND?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProfileScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    bio?: StringNullableWithAggregatesFilter | undefined;
    picture?: StringNullableWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
