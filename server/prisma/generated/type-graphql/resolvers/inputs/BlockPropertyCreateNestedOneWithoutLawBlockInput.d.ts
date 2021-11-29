import { BlockPropertyCreateOrConnectWithoutLawBlockInput } from "../inputs/BlockPropertyCreateOrConnectWithoutLawBlockInput";
import { BlockPropertyCreateWithoutLawBlockInput } from "../inputs/BlockPropertyCreateWithoutLawBlockInput";
import { BlockPropertyWhereUniqueInput } from "../inputs/BlockPropertyWhereUniqueInput";
export declare class BlockPropertyCreateNestedOneWithoutLawBlockInput {
    create?: BlockPropertyCreateWithoutLawBlockInput | undefined;
    connectOrCreate?: BlockPropertyCreateOrConnectWithoutLawBlockInput | undefined;
    connect?: BlockPropertyWhereUniqueInput | undefined;
}
