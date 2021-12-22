import React from "react";
import type { GetServerSideProps } from "next";

import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import FormBase from "../../../components/FormBase";
import Input from "../../../components/FormBase/Input";
import { checkAdmin } from "../../../lib/checkAdmin";

export default function NewCrawler() {
    return (
        <AdminLayout title="Crawlers - Brasileis Admin">
            <CrudBar title='Crawlers' update />
            <FormBase formTitle="Crawler" create>
                <Input
                    name="crawlerName"
                    label="Nome do Crawler"
                    type="text"
                    helper="Use um nome descritivo"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Nome do Crawler"
                />
                <Input
                    name="cron"
                    label="Horário para executar o crawler"
                    type="text"
                    helper="https://crontab.guru/"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="* * * * *"
                />
            </FormBase>

        </AdminLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = context.req.cookies
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

