import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Text,
    IconButton,
    Center,
    SimpleGrid,
    Skeleton,
    Icon,
    ChakraProps,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";

import FeedSideBar from "./FeedSideBar";
import { AddIcon, BellIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useData, useMutate } from "../../lib/hooks";
import router from "next/router";
import Link from "next/link";
import dayjs from "../../lib/dayjs";


const DotIcon = (props: ChakraProps) => {
    return (
        <Icon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
        </Icon>
    )
}
const CheckBoxButton = ({
    isChecked,
    name,
    value,
    onChange,
    label
}: {
    isChecked: boolean,
    name: string,
    value: string,
    label: string,
    onChange?: any
}) => {
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(isChecked)
    }, [isChecked])

    return (
        <Button
            background={checked ? "#3182ce" : "white"}
            color={checked ? "white" : "#3182ce"}
            borderRadius="base"
            colorScheme="blue"
            p="4"
            w={["100%", "100%", "160px"]}
            style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
            }}
            h="auto"
            onClick={() => {
                setChecked(!checked)
                onChange({
                    id: 'id',
                    persist: () => { },
                    target: {
                        name: name,
                        value: !checked ? value : null,
                    },
                })
            }}
            variant="outline"
        >
            <Text>{label}</Text>
        </Button>
    )
}


export default function FeedContent({
    feedData,
    followingTopics,
    token
}: {
    feedData: any[],
    followingTopics: any[],
    token?: string
}) {

    const [value, setValue] = useState<any[]>([])
    const [idsToFollow, setIdsToFollow] = useState<any[]>([])
    const [canGoNext, setCanGoNext] = useState(false)
    const { data: topicsData, error } = useData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/topics`, token)

    const saveData = useMutate()

    useEffect(() => {
        const selects = Object.values(value).filter((e) => e !== null)
        setIdsToFollow(selects)
        if (selects.length > 2) {
            setCanGoNext(true)
        } else {
            setCanGoNext(false)
        }
        console.log(selects)
    }, [value])

    const handleSave = async () => {
        console.log(idsToFollow)
        await saveData.mutate(0, 'PUT', `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/follow-topics`, {
            topicsIds: idsToFollow
        })
        router.reload()
    }


    return (
        <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
            {followingTopics && followingTopics.length == 0 && (
                <Center>
                    <Box p="4" borderRadius="base" shadow="base" w={["100%", "100%", "container.lg"]} mt="12">
                        <Text
                            fontSize="3xl"
                            fontWeight="thin"
                            textAlign="center"
                        >
                            Bem vindo ao Brasileis
                        </Text>

                        <Text
                            fontSize="lg"
                            textAlign="center"
                        >
                            O Brasileis é um feed de leis e motor de busca de legislação.
                        </Text>
                        <Text
                            fontSize="lg"
                            textAlign="center"
                        >
                            Escolha no mínimo 3 tópicos para você seguir para receber atualizações
                        </Text>
                        <Box mt="8">
                            {/* <Center>
                                <Input type="text" placeholder="Pesquisar tópicos" w="container.md"></Input>
                            </Center> */}
                            {topicsData && (
                                <SimpleGrid columns={[1, 1, 5]} spacing={10} mt="8">

                                    {topicsData.map((topic: any, index: number) => {
                                        return (
                                            <CheckBoxButton
                                                isChecked={false}
                                                label={topic.name}
                                                name={topic.name}
                                                value={topic.id}
                                                onChange={(e: any) => setValue(oldValues => ({
                                                    ...oldValues,
                                                    [index]: e.target.value
                                                })
                                                )}
                                            />
                                        )
                                    })}
                                </SimpleGrid>
                            )}
                            {!topicsData && (

                                <SimpleGrid columns={[1, 1, 5]} spacing={10} mt="8">

                                    {
                                        //@ts-ignore
                                        [...Array(30).keys()].map((e, index) => {
                                            return (
                                                <Skeleton height='20px' />
                                            )
                                        })}
                                </SimpleGrid>
                            )}


                        </Box>

                        <Box display="flex" flexDir="row" mt="8" justifyContent="end">
                            <Button
                                colorScheme="blue"
                                rightIcon={<ArrowForwardIcon />}
                                isDisabled={!canGoNext}
                                onClick={handleSave}
                                isLoading={saveData.loading[0]}
                            >Próximo</Button>
                        </Box>
                    </Box>
                </Center>
            )
            }
            {followingTopics && followingTopics.length != 0 && (
                <Flex
                    flexDirection={["column", "column", "row"]}
                    position="sticky"
                    top="20"
                    height="100%"
                >
                    <FeedSideBar title="feed" fixContent >
                        <Text fontSize="sm">Tópicos que você segue</Text>
                        <SimpleGrid columns={[1, 1, 1]} spacing={2}>
                            {followingTopics.map((topic: any) => {
                                return (
                                    <Link passHref href={`/topics/${topic.id}`}>
                                        <Box
                                            style={{
                                                whiteSpace: "normal",
                                                wordWrap: "break-word",
                                            }}
                                            padding="2"
                                            borderRadius="base"
                                            border="1px solid #2b6cb0"
                                            color="#2b6cb0"
                                            as="a"
                                        >
                                            {topic.name}
                                        </Box>
                                    </Link>
                                )
                            })}
                        </SimpleGrid>
                        <Box mt="10">
                            <Link passHref href={`/topics`}>
                                <Button
                                    as="a"
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme="blue"
                                >Ver todos os tópicos</Button>
                            </Link>

                        </Box>

                    </FeedSideBar>

                    <Box flex="1" padding={["4", "4", "8"]}>
                        <Text
                            fontSize={["xl", "xl", "2xl"]}
                            fontWeight="thin"
                            pb="4"
                        >
                            Atualizações dos tópicos que você segue
                        </Text>

                        {feedData.map((feed) => {
                            return (
                                <Box
                                    className="card"
                                    display="flex"
                                    flexDir="column"
                                    borderWidth="1px"
                                    p="4"
                                    borderRadius="base"
                                >
                                    <Text fontSize="sm">postado a {dayjs().from(feed.createdAt, true)}</Text>

                                    <Link passHref href={`/l/${feed.lawBlock.slug.value}/${feed.lawBlock.id}`}>
                                        <Text as="a" fontSize="xl" pb="4">Atualização em: {feed.topic.name}</Text>
                                    </Link>
                                    <Text pb="4" color="gray.600">{JSON.parse(feed.content).description}</Text>
                                    {/* <Box
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
                                        <Box display="flex" gridGap="2">
                                            <IconButton
                                                icon={<AddIcon />}
                                                aria-label='Salvar na biblioteca'
                                                title="Salvar na biblioteca"
                                                variant="outline"
                                                size="sm"
                                                colorScheme="blue"
                                            />


                                            <Menu>
                                                <MenuButton as={IconButton} icon={<DotIcon />} aria-label='Opções'
                                                    title="Opções"
                                                    variant="outline"
                                                    size="sm"
                                                    colorScheme="blue">
                                                    Actions
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>Download</MenuItem>
                                                    <MenuItem>Create a Copy</MenuItem>
                                                    <MenuItem>Mark as Draft</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                    <MenuItem>Attend a Workshop</MenuItem>
                                                </MenuList>
                                            </Menu>

                                        </Box>
                                    </Box> */}
                                </Box>

                            )
                        })}


                    </Box>
                </Flex>
            )
            }
        </Box>
    );
}
