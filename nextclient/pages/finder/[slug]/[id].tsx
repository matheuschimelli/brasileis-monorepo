import React from 'react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import LawFinder from "../../../components/LawFinder";
import { getDataFromApi } from '../../../lib/hooks';

type FinderPageProps = {
    lawBlockData: any
    codeNumbersData: any
}

export default function FinderPage({ lawBlockData, codeNumbersData }: FinderPageProps) {
    return (
        <DefaultLayout title={lawBlockData.name}>
            <LawFinder lawBlockData={lawBlockData} codeNumbersData={codeNumbersData} />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params!.id?.toString()

    try {
        const lawBlockData = await getDataFromApi(`law-block/${id}`)
        const codeNumbersData = await getDataFromApi(`law-block/code-numbers/${lawBlockData.block.belongsToLawBlockId}`)

        if (!lawBlockData) return { notFound: true };

        return { props: { lawBlockData, codeNumbersData } };

    } catch (err) {
        return {
            notFound: true,
        };
    }
};
