import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawRender from "../../../components/LawRender/LawRender";

type Props = {
    data: any
    slug: string,
    id: string
}
const Busca = ({ data, slug, id }: Props) => {
    return (
        <DefaultLayout title={data.details.title}>
            <LawRender data={data} slug={slug} id={id} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug, id } = context.query

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/law-block/${slug}/${id}?skip=0`)
    const data = await req.json()

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data, slug, id }, // will be passed to the page component as props
    };
};
export default Busca;
