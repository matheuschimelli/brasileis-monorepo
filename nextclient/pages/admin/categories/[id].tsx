import React from "react";
import type { GetServerSideProps } from "next";
import AdminLayout from "../../../components/Admin/AdminLayout";
import CrudBar from "../../../components/Admin/CrudBar";
import { checkAdmin } from "../../../lib/checkAdmin";
import CategoryForm from "../../../components/Admin/Category/CategoryForm";

export default function EditCrawler() {
    return (
        <AdminLayout title="Categorias">
            <CrudBar title='Categorias' path="categories" />
            <CategoryForm />
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

