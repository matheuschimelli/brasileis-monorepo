import React from 'react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { Center, Text, Box, Divider, Button, Link } from "@chakra-ui/react";
import SearchForm from "../../components/layout/SearchForm";
import { SimpleGrid } from '@chakra-ui/react'
import { getDataFromApi } from "../../lib/hooks";

type JurisprudenciaIndexPageProps = {
    data: any[]
}

export default function JurisprudenciaIndexPage({ data }: JurisprudenciaIndexPageProps) {
    return (
        <DefaultLayout title={`Jurisprudência`}>
            <Box minH="100vh" display="flex" flexDir="column">
                <Box
                    mt="10"
                    display="flex"
                    flexDir="column"
                    gridGap="10"
                    alignContent="center"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Center>
                        <Text as="h1" fontSize="3xl" fontWeight="bold">
                            Pesquisa de Jurisprudência Brasileis
                        </Text>
                    </Center>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignContent="center"

                    >
                        <SearchForm />
                    </Box>
                    <Divider />
                </Box>
                <Box mt="10">
                    <Center>
                        <Text as="h1" fontSize="xl" fontWeight="thin">
                            Tribunais
                        </Text>
                    </Center>

                    <Box display="flex" flexDir="row" justifyContent="center">
                        <SimpleGrid columns={4} spacing={10}>
                            {data && data.map((tribunal) => {
                                return (
                                    <Link href={`/jurisprudencia/tribunal/${tribunal.slug}`}>
                                        <Button variant="outline" size="lg" as="a">{tribunal.name}</Button>
                                    </Link>
                                )
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>

        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const data = await getDataFromApi('jurisprudencia/tribunais')
        return {
            props: { data: data },
        };
    } catch (err) {
        return {
            notFound: true,
        };
    }
};
