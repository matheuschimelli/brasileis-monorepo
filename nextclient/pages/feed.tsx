import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import FeedContent from "../components/Feed/FeedContent";
import { getData } from "../lib/hooks";

type Props = {
    feedData: any
    token?: string,
    followingTopics: any
}
const Busca = ({ feedData, token, followingTopics }: Props) => {
    return (
        <DefaultLayout title="Feed">
            <FeedContent feedData={feedData} followingTopics={followingTopics} token={token} />
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

    return {
        props: {
            feedData,
            followingTopics: followingTopicsData.followingTopics,
            token
        }, // will be passed to the page component as props
    };
};
export default Busca;
