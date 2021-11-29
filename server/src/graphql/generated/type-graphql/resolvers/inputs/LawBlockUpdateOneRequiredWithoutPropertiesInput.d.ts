import { LawBlockCreateOrConnectWithoutPropertiesInput } from "../inputs/LawBlockCreateOrConnectWithoutPropertiesInput";
import { LawBlockCreateWithoutPropertiesInput } from "../inputs/LawBlockCreateWithoutPropertiesInput";
import { LawBlockUpdateWithoutPropertiesInput } from "../inputs/LawBlockUpdateWithoutPropertiesInput";
import { LawBlockUpsertWithoutPropertiesInput } from "../inputs/LawBlockUpsertWithoutPropertiesInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockUpdateOneRequiredWithoutPropertiesInput {
    create?: LawBlockCreateWithoutPropertiesInput | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutPropertiesInput | undefined;
    upsert?: LawBlockUpsertWithoutPropertiesInput | undefined;
    connect?: LawBlockWhereUniqueInput | undefined;
    update?: LawBlockUpdateWithoutPropertiesInput | undefined;
}
