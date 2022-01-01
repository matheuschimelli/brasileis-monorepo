import type { GetServerSideProps } from "next";
import { getData } from "../../lib/hooks";
import AdminLayout from "../../components/Admin/AdminLayout";
import { Box } from "@chakra-ui/react";

export default function Admin() {
    return (
        <AdminLayout title="Painel de Administração - Brasileis Admin">
            {/* Add content here, remove div below  */}
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="96" />
        </AdminLayout>
    )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = context.req.cookies
    console.log(token)

    const isAdmin = async () => {
        const res = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/check-admin`, token)
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
