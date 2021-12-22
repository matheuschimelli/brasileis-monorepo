import React from "react";
import type { GetServerSideProps } from "next";

import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import FormBase from "../../../components/FormBase";
import Input from "../../../components/FormBase/Input";
import { checkAdmin } from "../../../lib/checkAdmin";

export default function NewCrawler() {
    return (
        <AdminLayout title="Tipos de Crawler - Brasileis Admin">
            <CrudBar title='Novo Tipo Crawler' update />
            <FormBase
                create
                formTitle="Novo Tipo de Crawler"
                initSchema={{ name: String, description: String }}
                apiRoute="crawler-types"
                method="POST"

            >
                <Input
                    name="name"
                    label="Nome do tipo do Crawler"
                    type="text"
                    helper="Use um nome descritivo"
                    onChange={(e) => console.log(e.target.value)}
                    placeholder="Nome do Crawler"
                />
                <Input
                    name="description"
                    label="Descrição do crawler"
                    type="text"
                    onChange={(e) => console.log(e.target.value)}
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

