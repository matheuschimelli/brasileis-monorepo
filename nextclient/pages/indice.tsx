import React from "react";
import { Box, Text, SimpleGrid, Button } from '@chakra-ui/react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import { getDataFromApi } from "../lib/hooks";


export default function IndicePage({ indexData }: { indexData: any }) {
    return (
        <DefaultLayout title="Índice de leis">
            <Box p="4" w="100%">
                <Text align="center"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    Índice de leis - Brasileis
                </Text>

                <Box shadow="sm" p="4" mt="10">
                    <SimpleGrid columns={[1, 1, 3]} spacing={10}>

                        <Box display="flex" flexDir="column">
                            <Text
                                align="center"
                                mb="5"
                                fontWeight="thin"
                                fontSize="xl">
                                Legislação Municipal
                            </Text>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                disabled
                            >
                                Estamos trabalhando nisso
                            </Button>
                        </Box>

                        <Box display="flex" flexDir="column">
                            <Text
                                align="center"
                                mb="5"
                                fontWeight="thin"
                                fontSize="xl">
                                Legislação Estadual
                            </Text>
                            <Button
                                variant="outline"
                                colorScheme="blue"
                                disabled
                            >
                                Estamos trabalhando nisso
                            </Button>
                        </Box>

                        <Box display="flex" flexDir="column">
                            <Text
                                align="center"
                                mb="5"
                                fontWeight="thin"
                                fontSize="xl">
                                Legislação Federal
                            </Text>
                            <Box
                                display="flex"
                                flexDir="column"
                                gridGap="5"
                            >
                                {indexData && indexData.map((item: any) => {
                                    return (
                                        <Button
                                            as="a"
                                            variant="outline"
                                            colorScheme="blue"
                                            href={`/l/${item.slug.value}/${item.id}`}
                                        >
                                            {item.title}
                                        </Button>
                                    )
                                })}
                            </Box>
                        </Box>
                    </SimpleGrid>

                </Box>
            </Box>
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies: { token } } }) => {
    const data = await getDataFromApi('law-block/index', token)
    return {
        props: {
            indexData: data.codigo
        }
    }
};
