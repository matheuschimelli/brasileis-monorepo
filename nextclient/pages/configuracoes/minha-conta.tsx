import { Box, Text, Heading } from '@chakra-ui/layout'
import { GetServerSideProps } from 'next'
import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { useAuth } from '../../lib/auth'

export default function MinhaConta() {
    return (
        <DefaultLayout title="Configurações da conta">
            <Box display="flex" flexDirection={{ sm: "column", md: "column", lg: "row" }} gridGap="5">
                <Box flex="1" borderRadius="md" display="flex" flexDirection="column" p="3">
                    <Text pb="20">Configurações da conta</Text>
                </Box>
                <Box flex="5" p="3" borderRadius="md">
                    <Heading pb="5" fontSize="lg">Informações da conta</Heading>

                </Box>
            </Box>
        </DefaultLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, }) => {
    const token = req.cookies.token

    if (!token) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
                statusCode: 400,
            }
        }
    }

    return {
        props: {
            data: "ola mundo"
        }
    }

}