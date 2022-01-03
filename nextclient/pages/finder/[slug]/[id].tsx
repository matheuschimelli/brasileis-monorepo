import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawFinder from "../../../components/LawFinder";

type Props = {
    data: any
}
const Busca = ({ data }: Props) => {
    return (
        <DefaultLayout title={data.name}>
            <LawFinder data={data} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const id = context.params!.id?.toString()
        const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/law-block/${id}`)
        const data = await req.json()
        console.log(data)

        if (!data) {
            return {
                notFound: true,
            };
        }

        return {
            props: { data }, // will be passed to the page component as props
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};
export default Busca;
