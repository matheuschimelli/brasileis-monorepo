import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { getData } from "../../lib/hooks";
import { SimpleGrid, Box } from '@chakra-ui/react'

export default function Admin() {
    return (
        <DefaultLayout title="Admin">
            <SimpleGrid columns={[1, 1, 4]} spacing={10}>
                <Box bg='tomato' height='80px'>Usuários</Box>
                <Box bg='tomato' height='80px'>Invoices</Box>
                <Box bg='tomato' height='80px'>Crawlers</Box>
                <Box bg='tomato' height='80px'>Erros reportados</Box>
                <Box bg='tomato' height='80px'>Configurações do site</Box>
            </SimpleGrid>
        </DefaultLayout>
    )
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
