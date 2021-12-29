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
    console.log(context)
    const id = context.params!.id?.toString()
    const req = await fetch(`http://localhost:8080/api/v1/law-block/${id}`)
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
};
export default Busca;
