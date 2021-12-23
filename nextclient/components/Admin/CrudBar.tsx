import React from 'react'
import Link from 'next/link'
import { Box, Text } from '@chakra-ui/react'

type Props = {
    title: string
    path: string

}
export default function CrudBar({ title, path }: Props) {


    return (
        <Box display="flex" flexDir="row" gridGap={5} justifyContent="start" alignItems="center" mb="10" pb="4" borderBottom="1px solid #eee" >
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
            <Box display="flex" flexDir="row" gridGap={10}>
                <Link href={`/admin/${path}`} >Início</Link>
                <Link href={`/admin/${path}/new`}>Criar novo</Link>
            </Box>
        </Box >
    )
}