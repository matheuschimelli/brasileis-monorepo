import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'

export default function MinhaConta() {
    return (
        <DefaultLayout title="Configurações da conta">
            <Box display="flex" flexDirection="row" gridGap="5">
                <Box flex="1" borderRight="1px" borderRightColor="gray.100" display="flex" flexDirection="column">
                    <Text fontWeight="bold" pb="20">Configurações da conta</Text>
                </Box>
                <Box flex="5">
                    <Text fontWeight="bold" pb="5" fontSize="2xl">Informações da conta</Text>
                    <Text fontWeight="bold" pb="5" fontSize="2xl">Assinatura</Text>
                    <Text fontWeight="bold" pb="5" fontSize="2xl">Outras opções</Text>
                </Box>
            </Box>
        </DefaultLayout>
    )
}