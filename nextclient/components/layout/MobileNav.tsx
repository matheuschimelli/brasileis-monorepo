import React from 'react'
import {
    Box,
    ChakraProps,
    IconButton,
    Icon
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Link from 'next/link'

const HomeIcon = (props: ChakraProps) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    </Icon>
)
const AccountIcon = (props: ChakraProps) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </Icon>
)

const SettingsIcon = (props: ChakraProps) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
    </Icon>
)

export default function MobileNav() {
    return (
        <Box
            display={["flex", "flex", "none"]}
            background="white"
            position="fixed"
            height="50"
            width="100%"
            bottom="0"
            flexDir="row"
            justifyContent="center"
        >
            <Link passHref href=''>
                <IconButton
                    aria-label='Search database'
                    icon={<AccountIcon fontSize="20px" />}
                    height="100%"
                    w="100%"
                    borderRadius="none"
                    colorScheme="gray"
                />
            </Link>
            <Link passHref href="/">
                <IconButton
                    as="a"
                    aria-label='Início - Feed'
                    icon={<HomeIcon fontSize="20px" />}
                    height="100%"
                    w="100%"
                    borderRadius="none"
                />
            </Link>
            <Link passHref href="/configuracoes/minha-conta">
                <IconButton
                    aria-label='Search database'
                    icon={<SettingsIcon fontSize="20px" />}
                    height="100%"
                    w="100%"
                    borderRadius="none"
                />
            </Link>
        </Box>
    )
}