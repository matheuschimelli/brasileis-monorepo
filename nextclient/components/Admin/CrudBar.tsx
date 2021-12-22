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
        <Box display="flex" flexDir="row" gridGap={5} justifyContent="start" alignItems="center" mb="10">
            <Text fontSize="2xl">{title}</Text>
            <Box>
                {create && (<Link href='novo'>
                    <Button>Criar novo</Button>
                </Link>)}

                {update && (
                    <Button onClick={onUpdate}>Salvar</Button>
                )}

                {destroy && (
                    <Button onClick={onDestroy}>Apagar</Button>
                )}
            </Box>
        </Box>
    )
}