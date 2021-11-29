import { LawBlockCreateManyLawBlockInputEnvelope } from "../inputs/LawBlockCreateManyLawBlockInputEnvelope";
import { LawBlockCreateOrConnectWithoutLawBlockInput } from "../inputs/LawBlockCreateOrConnectWithoutLawBlockInput";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockCreateNestedManyWithoutLawBlockInput {
    create?: LawBlockCreateWithoutLawBlockInput[] | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutLawBlockInput[] | undefined;
    createMany?: LawBlockCreateManyLawBlockInputEnvelope | undefined;
    connect?: LawBlockWhereUniqueInput[] | undefined;
}
