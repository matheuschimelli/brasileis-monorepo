import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumBlockTypeFilter } from "../inputs/EnumBlockTypeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LawBlockScalarWhereInput {
    AND?: LawBlockScalarWhereInput[] | undefined;
    OR?: LawBlockScalarWhereInput[] | undefined;
    NOT?: LawBlockScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumBlockTypeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    lawBlockId?: StringNullableFilter | undefined;
}
