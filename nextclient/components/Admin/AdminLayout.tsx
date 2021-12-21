import { Box, useDisclosure, useColorModeValue, Drawer, DrawerOverlay, DrawerContent, Flex, IconButton } from '@chakra-ui/react';
import React from 'react'
import DefaultLayout from '../layout/DefaultLayout';
import SidebarContent from './SidebarContent';

import { FiMenu } from "react-icons/fi";

export default function AdminLayout({ title, children }: { title: string, children: React.ReactNode }) {
    const sidebar = useDisclosure();

    return (
        <DefaultLayout title={title}>
            <Box
                as="section"
                bg={useColorModeValue("gray.50", "gray.700")}
                minH="100vh"
            >
                <SidebarContent display={{ base: "none", md: "unset" }} />
                <Drawer
                    isOpen={sidebar.isOpen}
                    onClose={sidebar.onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none" />
                    </DrawerContent>
                </Drawer>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Flex
                        as="header"
                        align="center"
                        justify="space-between"
                        w="full"
                        px="4"
                        borderBottomWidth="1px"
                        borderColor={useColorModeValue("inherit", "gray.700")}
                        h="14"
                    >
                        <IconButton
                            aria-label="Menu"
                            display={{ base: "inline-flex", md: "none" }}
                            onClick={sidebar.onOpen}
                            icon={<FiMenu />}
                            size="sm"
                        />

                    </Flex>

                    <Box as="main" p="4">
                        {children}
                    </Box>
                </Box>
            </Box>
        </DefaultLayout>
    );
}