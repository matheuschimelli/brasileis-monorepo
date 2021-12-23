import React from "react";
import type { GetServerSideProps } from "next";
import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import { checkAdmin } from "../../../lib/checkAdmin";
import CrawlerManager from "../../../components/Admin/CrawlerManager";
import { useRouter } from "next/router";
import CrawlerForm from "../../../components/Admin/Crawler/CrawlerForm";

export default function EditCrawler() {
    const router = useRouter()
    const { id } = router.query

    return (
        <AdminLayout title="Crawlers">
            <CrudBar title='Crawlers' path="crawlers" />
            <CrawlerManager id={id as string} />
            <CrawlerForm />
        </AdminLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = context.req.cookies
    console.log(token)
    const isAdmin = await checkAdmin(token)

    if (isAdmin) {
        return {
            props: {
                isAdmin: true
            }
        }
    }
    return {
        notFound: true
    }
};

