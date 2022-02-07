import React from "react";
import type { GetServerSideProps } from "next";
import { getData } from "../../../lib/hooks";
import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import ShowItems from "../../../components/Admin/ShowItems";
import { checkAdmin } from "../../../lib/checkAdmin";
import CrawlerOptions from "../../../components/Admin/CrawlerOptions";

export default function Swibc({ crawlers }: { crawlers: any[] }) {
    return (
        <AdminLayout title="Crawlers - Brasileis Admin">
            <CrawlerOptions />
            <CrudBar title='Crawlers' path="crawlers" />
            <ShowItems data={crawlers} itemTitle="name" itemValue="id" pathTo="crawlers" viewMode="grid" />

        </AdminLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = req.cookies.token

    const isAdmin = await checkAdmin(token)

    const crawlersReq = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/crawlers`, token)
    const crawlers = await crawlersReq.json()
    console.log(crawlers)



    if (isAdmin) {
        return {
            props: {
                isAdmin: true,
                crawlers
            }
        }
    }
    return {
        notFound: true
    }
};

