import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

type Props = {
    title: string
    children: React.ReactNode
}
export default function SettingsBox(props: Props) {
    return (
        <Flex
            as="dl"
            direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
            px="6"
            py="4"
            gridGap="10"
        >
            <Box as="dt" minWidth="180px" backgroundColor="gray.50" padding="3" borderRadius="base" >
                {props.title}
            </Box>
            <Box as="dd" flex="1" shadow="xs" borderRadius="base" padding="3" gridGap="5" alignItems="start" display="flex" flexDir={['column', 'column', 'row']}>
                {props.children}
            </Box>
        </Flex>

    )
}