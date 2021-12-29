import React from "react";
import {
    Box,
    Flex,
    Text,
    Icon,
    useColorModeValue,
    Collapse,
    useDisclosure
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

export default function SidebarContent(props: any) {
    const integrations = useDisclosure();

    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pb="10"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue("white", "gray.800")}
            borderColor={useColorModeValue("inherit", "gray.700")}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <Flex px="4" py="5" align="center">
                {/* <Logo /> */}
                <Text
                    fontSize="2xl"
                    ml="2"
                    color={useColorModeValue("brand.500", "white")}
                    fontWeight="semibold"
                >
                    Choc UI
                </Text>
            </Flex>
            <Flex
                direction="column"
                as="nav"
                fontSize="sm"
                color="gray.600"
                aria-label="Main Navigation"
            >
                <Link href="/admin/" passHref>
                    <NavItem icon={MdHome} as="a">Home</NavItem>
                </Link>
                <Link href="/admin/articles" passHref>
                    <NavItem icon={FaRss} as="a">Artigos</NavItem>
                </Link>
                <Link href="/admin/crawlers" passHref>
                    <NavItem icon={HiCollection} as="a">Crawlers</NavItem>
                </Link>
                <Link href="/admin/crawler-types" passHref>
                    <NavItem icon={FaClipboardCheck} as="a">Tipos de Crawler</NavItem>
                </Link>
                <Link href="/admin/users" passHref>
                    <NavItem icon={FaClipboardCheck} as="a">Usuários</NavItem>
                </Link>
                <NavItem icon={HiCode} onClick={integrations.onToggle}>
                    Integrations
                    <Icon
                        as={MdKeyboardArrowRight}
                        ml="auto"

                    />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                    <NavItem pl="12" py="2">
                        Shopify
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Slack
                    </NavItem>
                    <NavItem pl="12" py="2">
                        Zapier
                    </NavItem>
                </Collapse>
                <Link href="/admin/settings" passHref>
                    <NavItem icon={BsGearFill} as="a">Configurações</NavItem>
                </Link>
            </Flex>
        </Box>)
}