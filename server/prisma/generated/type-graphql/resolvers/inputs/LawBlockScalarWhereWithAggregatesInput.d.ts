import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBlockTypeWithAggregatesFilter } from "../inputs/EnumBlockTypeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LawBlockScalarWhereWithAggregatesInput {
    AND?: LawBlockScalarWhereWithAggregatesInput[] | undefined;
    OR?: LawBlockScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LawBlockScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumBlockTypeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    lawBlockId?: StringNullableWithAggregatesFilter | undefined;
}
