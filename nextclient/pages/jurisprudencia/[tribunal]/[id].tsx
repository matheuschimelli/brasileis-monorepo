import { GetServerSideProps } from 'next';
import React from 'react'
import JurisprudenciaFinder from '../../../components/JurisprudenciaFinder';
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { getDataFromApi } from '../../../lib/hooks';

type JurisprudenciaIdPageProps = {
    data: any
}

export default function JurisprudenciaIdPage({ data }: JurisprudenciaIdPageProps) {
    return (
        <DefaultLayout title={`${data.tribunal.name} - ${data.comarca} - ${data.numeroProcesso} - Jurisprudência`}>
            <JurisprudenciaFinder data={data} />
        </DefaultLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    const tribunal = context.params!.tribunal?.toString()
    const id = context.params!.id?.toString()

    try {
        const data = await getDataFromApi(`jurisprudencia/${tribunal}/${id}`)
        if (!data) return { notFound: true };
        return { props: { data: data } };

    } catch (err) {
        return {
            notFound: true,
        };
    }
};
