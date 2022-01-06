import React from "react";
import {
    Box,
    Button,
    Flex,
    Text,
    IconButton
} from "@chakra-ui/react";
import FeedSideBar from "./FeedSideBar";
import { AddIcon, BellIcon } from "@chakra-ui/icons";

export default function FeedContent({ data }: { data: any }) {
    return (
        <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
            <Flex shadow={["none", "none", "base"]} flexDirection={["column-reverse", "column-reverse", "row"]}>
                <FeedSideBar title="feed" fixContent>
                    sdfsdfsdf
                </FeedSideBar>

                <Box flex="1" padding={["4", "4", "8"]}>
                    <Text
                        fontSize={["xl", "xl", "2xl"]}
                        fontWeight="thin"
                        pb="4"
                    >
                        Atualizações dos tópicos que você segue
                    </Text>
                    <Box
                        className="card"
                        display="flex"
                        flexDir="column"
                        borderWidth="1px"
                        p="4"
                        borderRadius="base"

                    >
                        <Text as="h2" fontSize="xl" pb="4">Atualização em: Estado do Paraná</Text>

                        <Text pb="4" color="gray.600">Novo diário oficial</Text>
                        <Box
                            className="boxFooter"
                            display="flex"
                            flexDir="row"
                            justifyContent="space-between"
                        >
                            <Box>
                                <IconButton
                                    icon={<BellIcon />}
                                    aria-label='Criar Alerta'
                                    title="Criar Alerta"
                                    variant="outline"
                                    size="sm"
                                    colorScheme="green"
                                />
                            </Box>
                            <Box>
                                <IconButton
                                    icon={<AddIcon />}
                                    aria-label='Salvar na biblioteca'
                                    title="Salvar na biblioteca"
                                    variant="outline"
                                    size="sm"
                                    colorScheme="blue"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
}
