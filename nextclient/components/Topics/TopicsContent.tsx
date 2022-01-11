import { Box, Button, Center, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function TopicsContent({ topics }: { topics: any[] }) {
    return (
        <Box mt="8" shadow="sm" padding="4">
            <Center>
                <Text fontSize="3xl" fontWeight="thin">Tópicos</Text>
            </Center>
            <Box mt="8">
                <SimpleGrid columns={7} spacing={5}>
                    {topics.map((topic) => {
                        return (
                            <Link passHref href={`/topicos/${topic.id}}`}>
                                <Button
                                    colorScheme='blue'
                                    variant="outline"
                                    w="auto"
                                    height="auto"
                                    as="a"
                                    style={{
                                        whiteSpace: "normal",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {topic.name}
                                </Button>
                            </Link>
                        )
                    })}
                </SimpleGrid>
            </Box>

        </Box>
    )
}