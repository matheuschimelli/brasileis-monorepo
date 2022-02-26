import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import FeedContent from "../components/Feed/FeedContent";
import { getData, getJson } from "../lib/hooks";
import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react'
import Link from "next/link";
import dayjs from "../lib/dayjs";

type Props = {
    feedData: any
    token?: string,
    followingTopics: any
    jurisprudenciaFeed: any[]
}
const Busca = ({ feedData, token, followingTopics, jurisprudenciaFeed }: Props) => {
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
                                            <Link passHref href={`/finder/jurisprudencia/${juris.id}`}>
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

                    </Box>

                </SimpleGrid>
                <Box height="500"></Box>
            </Box>
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = req.cookies.token

    const request = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/feed`, token)
    const feedData = await request.json()

    console.log(feedData)

    const requestFollowingTopics = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/following-topics`, token)
    const followingTopicsData = await requestFollowingTopics.json()

    const jurisprudenciaFeed = await getJson(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/jurisprudencia/feed?p=1`, token)

    return {
        props: {
            feedData,
            followingTopics: followingTopicsData.followingTopics,
            token,
            jurisprudenciaFeed
        }, // will be passed to the page component as props
    };
};
export default Busca;
