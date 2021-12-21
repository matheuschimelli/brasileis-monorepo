import React from "react";
import type { GetServerSideProps } from "next";
import { getData } from "../../../lib/hooks";
import {
    Box
} from "@chakra-ui/react";
import AdminLayout from "../../../components/Admin/AdminLayout";

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
    console.log(token)

    const isAdmin = async () => {
        const res = await getData(`${process.env.SERVER_URL}/api/v1/user/check-admin`, token)
        const response = await res.json()

        if (response.isAdmin) return true
        return false
    }

    if (await isAdmin()) {
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

