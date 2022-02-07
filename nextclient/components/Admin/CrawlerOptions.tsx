import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useMutate } from '../../lib/hooks'


export default function CrawlerOptions() {

    const runCrawler = useMutate()
    const handleRun = async () => {
        await runCrawler.mutate(1, 'POST', `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/crawlers/run-reindex/`)
    }

    return (
        <Box
            display="flex"
            flexDir="row"
            padding="2"
            borderRadius="base"
            background="gray.100"
            mb="5"
            gridGap="2"
        >
            <Button
                onClick={handleRun}
                isLoading={runCrawler.loading[1]}
            >
                Reindexar blocos no ElasticSearch
            </Button>
            <Button>Histórico de Execução</Button>
            <Button>Logs</Button>
        </Box>
    )
}