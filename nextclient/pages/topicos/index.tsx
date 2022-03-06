import React from 'react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import TopicsContent from "../../components/Topics/TopicsContent";
import { getDataFromApi } from "../../lib/hooks";

type TopicosIndexProps = {
    topics: any[]
}

export default function TopicosIndexPage({ topics }: TopicosIndexProps) {
    return (
        <DefaultLayout title="Feed">
            <TopicsContent topics={topics} />
        </DefaultLayout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const topics = await getDataFromApi('topics')

    return {
        props: {
            topics
        },
    };
};
