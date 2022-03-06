import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawRender from "../../../components/LawRender/LawRender";
import { getDataFromApi } from "../../../lib/hooks";

type LegislacaoPageProps = {
    data: any
    slug: string,
    id: string
}

export default function LegislacaoPage({ data, slug, id }: LegislacaoPageProps) {
    return (
        <DefaultLayout title={data.details.title}>
            <LawRender data={data} slug={slug} id={id} />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { slug, id } = query

    const data = await getDataFromApi(`law-block/${slug}/${id}?skip=0`)

    if (!data) return { notFound: true };

    return {
        props: {
            data,
            slug,
            id
        },
    };
};
