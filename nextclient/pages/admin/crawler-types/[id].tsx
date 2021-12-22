import React from "react";
import type { GetServerSideProps } from "next";
import {
    Box
} from "@chakra-ui/react";
import AdminLayout from "../../../components/Admin/AdminLayout";
import { checkAdmin } from "../../../lib/checkAdmin";

export default function Swibc() {
    return (
        <AdminLayout title="Crawlers - Brasileis Admin">
            {/* Add content here, remove div below  */}
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
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

