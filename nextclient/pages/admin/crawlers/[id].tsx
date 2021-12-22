import React from "react";
import type { GetServerSideProps } from "next";

import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import FormBase from "../../../components/FormBase";
import Input from "../../../components/FormBase/Input";
import { checkAdmin } from "../../../lib/checkAdmin";
import { Textarea } from "@chakra-ui/react";
import Checkbox from "../../../components/FormBase/Checkbox";
import CrawlerManager from "../../../components/Admin/CrawlerManager";
import { useRouter } from "next/router";

export default function EditCrawler() {
    const router = useRouter()
    const { id } = router.query

    return (
        <AdminLayout title="Crawlers">
            <CrudBar title='Crawler' update />
            <CrawlerManager id={id as string} />
            <FormBase
                create
                formTitle="Editar Crawler"
                initSchema={{ name: String, description: String }}
                apiRoute="crawlers"
                method="POST"
            >
                <Input
                    name="name"
                    label="Nome do tipo do Crawler"
                    type="text"
                    helper="Use um nome descritivo"
                    placeholder="Nome do Crawler"
                />
                <Input
                    name="source"
                    label="Url fonte"
                    type="text"
                    helper="Utilize url inteiro"
                    placeholder="http://site.com"
                />
                <Input
                    name="cron"
                    label="Cron"
                    type="text"
                    helper="Horário de execução"
                    placeholder="* * * * * "
                />
                <Textarea
                    name="description"
                    label="Descrição do crawler"
                    type="text"
                />
                <Checkbox
                    name="notifyUpdates"
                    label="Notificar Atualizações para usuários"

                />
            </FormBase>

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

