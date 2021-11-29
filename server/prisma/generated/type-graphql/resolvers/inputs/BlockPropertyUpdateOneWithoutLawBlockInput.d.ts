import { BlockPropertyCreateOrConnectWithoutLawBlockInput } from "../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyUpdateWithoutLawBlockInput } from "../inputs/BlockPropertyUpdateWithoutLawBlockInput";
import { BlockPropertyUpsertWithoutLawBlockInput } from "../inputs/BlockPropertyUpsertWithoutLawBlockInput";
import { BlockPropertyWhereUniqueInput } from "../inputs/BlockPropertyWhereUniqueInput";
export declare class BlockPropertyUpdateOneWithoutLawBlockInput {
    create?: BlockPropertyCreateWithoutLawBlockInput | undefined;
    connectOrCreate?: BlockPropertyCreateOrConnectWithoutLawBlockInput | undefined;
    upsert?: BlockPropertyUpsertWithoutLawBlockInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: BlockPropertyWhereUniqueInput | undefined;
    update?: BlockPropertyUpdateWithoutLawBlockInput | undefined;
}
