import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TopicsContent from "../../components/Topics/TopicsContent";
import { getData } from "../../lib/hooks";

type Props = {
    topics: any[]
}
const TopicosIndex = ({ topics }: Props) => {
    return (
        <DefaultLayout title="Feed">
            <TopicsContent topics={topics} />
        </DefaultLayout>
    );
};
export const getServerSideProps: GetServerSideProps = async () => {

    const request = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/topics`)
    const topics = await request.json()

    console.log(topics)

    return {
        props: {
            topics
        }, // will be passed to the page component as props
    };
};
export default TopicosIndex;
