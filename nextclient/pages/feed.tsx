import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import { getDataFromApi } from "../lib/hooks";
import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react'
import Link from "next/link";
import dayjs from "../lib/dayjs";

type Props = {
    feedData: any
    token?: string,
    followingTopics: any
    jurisprudenciaFeed: any[]
}
export default function FeedPage({ feedData, token, followingTopics, jurisprudenciaFeed }: Props) {

    return (
        <DefaultLayout title="Feed">
            {/* <FeedContent feedData={feedData} followingTopics={followingTopics} token={token} /> */}
            <Box mt="10">

                <SimpleGrid columns={[1, 1, 3]} spacing='40px'>
                    <Box height='80px' display="flex" flexDir="column">
                        <Text fontWeight="bold" pb="5">
                            <Text as="b">TJPR</Text>
                            {" - "}
                            Jurisprudência
                        </Text>
                        {jurisprudenciaFeed && jurisprudenciaFeed.map((juris) => {
                            return (
                                <Box mb="5">
                                    <Box display="flex" flexDir="row" justifyContent="space-between" w="100%">
                                        <Box overflow="hidden" maxW="82%">
                                            <Link passHref href={`/jurisprudencia/${juris.tribunal.slug}/${juris.id}`}>
                                                <Text as="a" isTruncated >
                                                    {juris.ementa}{"..."}
                                                </Text>
                                            </Link>
                                        </Box>
                                        <Box>
                                            <Text fontSize="sm">
                                                {dayjs().from(dayjs(juris.dataPublicacao), true)}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Divider />

                                </Box>
                            )
                        })}
                        <Text as="a" href={`/jurisprudencia/`}>Ver mais</Text>

                    </Box>

                </SimpleGrid>
                <Box height="500"></Box>
            </Box>
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies: { token } } }) => {

    const feedData = await getDataFromApi('user/feed', token)
    const followingTopicsData = await getDataFromApi('user/following-topics', token)
    const jurisprudenciaFeed = await getDataFromApi('jurisprudencia/feed?p=1', token)

    return {
        props: {
            feedData,
            followingTopics: followingTopicsData.followingTopics,
            token,
            jurisprudenciaFeed
        },
    };
};
