import type { GetServerSideProps } from "next";
import { getDataFromApi } from "../../lib/hooks";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Box } from "@chakra-ui/react";

export default function AdminIndexPage() {
    return (
        <AdminLayout title="Painel de Administração - Brasileis Admin">
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </AdminLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies: { token } } }) => {
    const isAdmin = async () => {
        const response = await getDataFromApi('user/check-admin', token)

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
