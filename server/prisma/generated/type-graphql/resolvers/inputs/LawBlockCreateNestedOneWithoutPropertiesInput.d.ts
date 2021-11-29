import { LawBlockCreateOrConnectWithoutPropertiesInput } from "../inputs/LawBlockCreateOrConnectWithoutPropertiesInput";
import { LawBlockCreateWithoutPropertiesInput } from "../inputs/LawBlockCreateWithoutPropertiesInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockCreateNestedOneWithoutPropertiesInput {
    create?: LawBlockCreateWithoutPropertiesInput | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutPropertiesInput | undefined;
    connect?: LawBlockWhereUniqueInput | undefined;
}
