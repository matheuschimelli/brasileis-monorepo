import React from 'react'
import Link from 'next/link'
import { Box, SimpleGrid, } from '@chakra-ui/react'

type Props = {
    data: any[]
    itemTitle: string
    itemValue: string
    pathTo: string
    viewMode: 'list' | 'grid'
}
export default function ShowItems({ data, itemTitle, itemValue, pathTo, viewMode }: Props) {
    const view = (viewMode: string) => {
        if (viewMode == 'list') return 1
        return 4
    }
    return (
        <Box mt="10">
            <SimpleGrid columns={[1, 1, view(viewMode)]} spacing={10}>
                {data.map((d) => {
                    return (
                        <Link passHref href={`${pathTo}/${d[itemValue]}`}>
                            <Box
                                bg='gray.200'
                                height='80px'
                                borderRadius="base"
                                textAlign="center"
                                as="a"
                                fontWeight="medium"
                                display="flex"
                                justifyContent="center"
                                justifyItems="center"
                                alignItems="center"
                                _hover={{
                                    background: 'gray.400'
                                }}
                            >{d[itemTitle]}</Box>
                        </Link>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}