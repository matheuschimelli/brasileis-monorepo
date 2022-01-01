import React from "react";
import type { GetServerSideProps } from "next";
import { getData } from "../../../lib/hooks";
import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import ShowItems from "../../../components/Admin/ShowItems";
import { checkAdmin } from "../../../lib/checkAdmin";

export default function Swibc({ crawlers }: { crawlers: any[] }) {
    return (
        <AdminLayout title="Tipos de Crawlers - Brasileis Admin">
            <CrudBar title='Tipos de Crawlers' path="/crawler-types" />
            <ShowItems data={crawlers} itemTitle="name" itemValue="id" pathTo="crawler-types" viewMode="grid" />
        </AdminLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = context.req.cookies
    const isAdmin = await checkAdmin(token)
    const crawlersReq = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/crawler-types`, token)
    const crawlers = await crawlersReq.json()

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

