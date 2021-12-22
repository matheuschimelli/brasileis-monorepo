import React from 'react'
import Link from 'next/link'
import { Box, Text, Button } from '@chakra-ui/react'

type Props = {
    title: string
    create?: boolean
    update?: boolean
    destroy?: boolean
    onUpdate?: () => void
    onDestroy?: () => void

}
export default function CrudBar({ title, create, update, destroy, onDestroy, onUpdate }: Props) {
    return (
        <Box display="flex" flexDir="row" gridGap={5} justifyContent="start" alignItems="center" mb="10" pb="4" borderBottom="1px solid #eee" >
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
            <Box display="flex" flexDir="row" gridGap={10}>
                <Link href="/admin/crawler-types">Início</Link>
                <Link href="/admin/crawler-types/new">Criar novo</Link>
            </Box>
        </Box>
    )
}