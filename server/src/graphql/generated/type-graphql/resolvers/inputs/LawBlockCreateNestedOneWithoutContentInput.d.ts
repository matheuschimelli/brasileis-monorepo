import { LawBlockCreateOrConnectWithoutContentInput } from "../inputs/LawBlockCreateOrConnectWithoutContentInput";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockCreateNestedOneWithoutContentInput {
    create?: LawBlockCreateWithoutContentInput | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutContentInput | undefined;
    connect?: LawBlockWhereUniqueInput | undefined;
}
