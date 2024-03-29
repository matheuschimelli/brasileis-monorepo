import React from "react";
import {
    Box,
    Heading,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
    ChakraProps,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";

import { Icon, createIcon } from '@chakra-ui/react'

type Props = {
    children?: React.ReactNode
    title?: string
    data: any[]
}

const ReferenceIcon = (props: ChakraProps) => {
    return (
        <Icon viewBox='0 0 200 200' {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        </Icon>
    )
}
const BookIcon = (props: ChakraProps) => {
    return (
        <Icon viewBox='0 0 200 200' {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </Icon>
    )
}
const CommentIcon = (props: ChakraProps) => {
    return (
        <Icon viewBox='0 0 200 200' {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>

        </Icon>
    )
}

const RenderReferences = ({ data }: { data: any[] }) => {
    return (
        <Box pb="5">
            <Accordion defaultIndex={[0]} allowMultiple>
                {data.map((article) => {
                    return (
                        <AccordionItem border="none">
                            <h2>
                                <AccordionButton >
                                    <Box flex='1' textAlign='left'>
                                        <Heading as="h3" fontSize="lg">{article.name}</Heading>

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} border="none">
                                {article.value}
                                {article.content &&
                                    article.content.map((subContent: any) => {
                                        return (
                                            <RenderReferences
                                                data={subContent.content}
                                            />
                                        );
                                    })}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}

            </Accordion>
        </Box>
    )
}

export default function LawTabs({ data }: Props) {
    return (

        <Tabs >
            <TabList position="sticky" >
                <Tab title="Jurisprudência relacionada" >
                    <Icon as={ReferenceIcon} boxSize={6} color="blue.600" />
                </Tab>
                <Tab title="Leis Relacionadas">
                    <Icon as={BookIcon} boxSize={6} color="blue.600" />
                </Tab>
                <Tab title="Doutrina e comentários">
                    <Icon as={CommentIcon} boxSize={6} color="blue.600" />
                </Tab>
            </TabList>
            <Box position="relative" overflowY="scroll" height={["auto", "auto", "450"]}>
                <TabPanels mb="200">
                    <TabPanel>
                        <RenderReferences data={data} />

                    </TabPanel>
                    <TabPanel>
                        <p>Doutrina</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Comentários</p>
                    </TabPanel>
                </TabPanels>
            </Box>
        </Tabs>

    )
}