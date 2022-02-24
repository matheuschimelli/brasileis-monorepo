import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawFinder from "../../../components/LawFinder";

type Props = {
    lawBlockData: any
    codeNumbersData: any
}
const Busca = ({ lawBlockData, codeNumbersData }: Props) => {
    return (
        <DefaultLayout title={lawBlockData.name}>
            <LawFinder lawBlockData={lawBlockData} codeNumbersData={codeNumbersData} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    try {

        const id = context.params!.id?.toString()

        const reqLawBlock = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/law-block/${id}`)
        const lawBlockData = await reqLawBlock.json()

        const reqCodeNumbers = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/law-block/code-numbers/${lawBlockData.block.belongsToLawBlockId}`)
        const codeNumbersData = await reqCodeNumbers.json()

        if (!lawBlockData) return { notFound: true };

        return {
            props: { lawBlockData, codeNumbersData }, // will be passed to the page component as props
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};
export default Busca;
