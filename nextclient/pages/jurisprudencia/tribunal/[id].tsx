import React from 'react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import { Text, Center, Box, Link } from '@chakra-ui/react'
import dayjs from "../../../lib/dayjs";
import Pagination from "../../../components/Pagination";
import { getDataFromApi } from '../../../lib/hooks';

type JurisprudenciaTribunalPageProps = {
    tribunal: any,
    jurisprudencias: any[]
    total: any
    itemsPerPage: number
}

export default function JurisprudenciaTribunalPage({ tribunal, jurisprudencias, total, itemsPerPage }: JurisprudenciaTribunalPageProps) {

    return (
        <DefaultLayout title={`${tribunal.name} - Jurisprudência`}>
            {(!jurisprudencias || jurisprudencias.length == 0) ? (
                <Text>Nada encontrado</Text>
            ) : (
                <>
                    <Center>
                        <Text as="h1" fontWeight="bold" fontSize="2xl">Jurisprudências do {tribunal.name}</Text>
                    </Center>
                    <Box display="flex" flexDir="column" >
                        {jurisprudencias && jurisprudencias.map((jurisprudencia) => {
                            return (
                                <>

                                    <Box
                                        padding="4"
                                        borderRadius="md"

                                        flexDirection="column"
                                        key={jurisprudencia.id}
                                    >
                                        <Link
                                            fontSize="xl"
                                            fontWeight="bold"
                                            href={`/jurisprudencia/${jurisprudencia.tribunal.slug}/${jurisprudencia.id}`}
                                            pb="10"
                                            color="blue.600"
                                        >
                                            <Text>{dayjs(jurisprudencia.dataPublicacao).format("DD/MM/YYYY").toString()} - {jurisprudencia.tribunal.name} - {jurisprudencia.numeroProcesso}  </Text>
                                        </Link>
                                        <Box overflow="hidden" maxW="100%">
                                            <Text as="b">Relator: {jurisprudencia.relator}</Text>

                                            <Text isTruncated>
                                                {jurisprudencia.ementa}
                                            </Text>
                                        </Box>
                                    </Box>
                                </>
                            )
                        })}
                    </Box>
                    <Pagination total={total as number} slug={tribunal.slug} itemsPerPage={itemsPerPage} />

                </>
            )}
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query, params }) => {

    const id = params!.id?.toString()
    const page = query.p

    try {
        const requestData = await getDataFromApi(`jurisprudencia/${id}?p=${page}`)
        if (!requestData) return { notFound: true };

        return {
            props: {
                jurisprudencias: requestData.jurisprudencias,
                tribunal: requestData.tribunal,
                total: requestData.count,
                itemsPerPage: requestData.itemsPerPage
            },
        };

    } catch (err) {
        return {
            notFound: true,
        };
    }
};

