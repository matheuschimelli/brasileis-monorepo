import { LawBlockCreateOrConnectWithoutContentInput } from "../inputs/LawBlockCreateOrConnectWithoutContentInput";
import { LawBlockCreateWithoutContentInput } from "../inputs/LawBlockCreateWithoutContentInput";
import { LawBlockUpdateWithoutContentInput } from "../inputs/LawBlockUpdateWithoutContentInput";
import { LawBlockUpsertWithoutContentInput } from "../inputs/LawBlockUpsertWithoutContentInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockUpdateOneWithoutContentInput {
    create?: LawBlockCreateWithoutContentInput | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutContentInput | undefined;
    upsert?: LawBlockUpsertWithoutContentInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: LawBlockWhereUniqueInput | undefined;
    update?: LawBlockUpdateWithoutContentInput | undefined;
}
