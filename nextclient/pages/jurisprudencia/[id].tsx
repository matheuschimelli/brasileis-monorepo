import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import JurisprudenciaFinder from "../../components/JurisprudenciaFinder";

type Props = {
    data: any
}
const Busca = ({ data }: Props) => {
    return (
        <DefaultLayout title={`${data.title} - Jurisprudência`}>
            <JurisprudenciaFinder data={data} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    try {

        const id = context.params!.id?.toString()

        const jurisprudencia = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/jurisprudencia/${id}`)
        const jurisprudenciaData = await jurisprudencia.json()

        if (!jurisprudenciaData) return { notFound: true };

        return {
            props: { data: jurisprudenciaData }, // will be passed to the page component as props
        };

    } catch (err) {
        return {
            notFound: true,
        };
    }
};
export default Busca;
