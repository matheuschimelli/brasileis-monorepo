import { LawBlockCreateManyLawBlockInputEnvelope } from "../inputs/LawBlockCreateManyLawBlockInputEnvelope";
import { LawBlockCreateOrConnectWithoutLawBlockInput } from "../inputs/LawBlockCreateOrConnectWithoutLawBlockInput";
import { LawBlockCreateWithoutLawBlockInput } from "../inputs/LawBlockCreateWithoutLawBlockInput";
import { LawBlockScalarWhereInput } from "../inputs/LawBlockScalarWhereInput";
import { LawBlockUpdateManyWithWhereWithoutLawBlockInput } from "../inputs/LawBlockUpdateManyWithWhereWithoutLawBlockInput";
import { LawBlockUpdateWithWhereUniqueWithoutLawBlockInput } from "../inputs/LawBlockUpdateWithWhereUniqueWithoutLawBlockInput";
import { LawBlockUpsertWithWhereUniqueWithoutLawBlockInput } from "../inputs/LawBlockUpsertWithWhereUniqueWithoutLawBlockInput";
import { LawBlockWhereUniqueInput } from "../inputs/LawBlockWhereUniqueInput";
export declare class LawBlockUpdateManyWithoutLawBlockInput {
    create?: LawBlockCreateWithoutLawBlockInput[] | undefined;
    connectOrCreate?: LawBlockCreateOrConnectWithoutLawBlockInput[] | undefined;
    upsert?: LawBlockUpsertWithWhereUniqueWithoutLawBlockInput[] | undefined;
    createMany?: LawBlockCreateManyLawBlockInputEnvelope | undefined;
    set?: LawBlockWhereUniqueInput[] | undefined;
    disconnect?: LawBlockWhereUniqueInput[] | undefined;
    delete?: LawBlockWhereUniqueInput[] | undefined;
    connect?: LawBlockWhereUniqueInput[] | undefined;
    update?: LawBlockUpdateWithWhereUniqueWithoutLawBlockInput[] | undefined;
    updateMany?: LawBlockUpdateManyWithWhereWithoutLawBlockInput[] | undefined;
    deleteMany?: LawBlockScalarWhereInput[] | undefined;
}
