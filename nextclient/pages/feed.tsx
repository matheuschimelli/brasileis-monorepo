import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import FeedContent from "../components/Feed/FeedContent";

type Props = {
    data: any
}
const Busca = ({ data }: Props) => {
    return (
        <DefaultLayout title="Feed">
            <FeedContent data={data} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {

    const { slug, id } = context.query

    // const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/law-block/${slug}/${id}`)
    // const data = await req.json()

    // if (!data) {
    //     return {
    //         notFound: true,
    //     };
    // }

    return {
        props: { data: true }, // will be passed to the page component as props
    };
};
export default Busca;
