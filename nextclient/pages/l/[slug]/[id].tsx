import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawRender from "../../../components/LawRender/LawRender";

type Props = {
    data: any
}
const Busca = ({ data }: Props) => {
    return (
        <DefaultLayout title={data.details.title}>
            <LawRender data={data} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug, id } = context.query

    const req = await fetch(`http://localhost:8080/api/v1/law-block/${slug}/${id}`)
    const data = await req.json()

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
