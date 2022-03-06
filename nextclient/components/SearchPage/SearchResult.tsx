import React from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

type SearchResultsProps = {
    key: any
    result: any
}
export default function SearchResults({ key, result }: SearchResultsProps) {

    const generateLink = (result: any) => {
        if (result._source.blockType === "JURISPRUDENCIA") {
            return `/jurisprudencia/${result._id}`
        }

        return `/finder/${result._source.slug}/${result._id}`
    }

    return (
        <Box
            padding="4"
            borderRadius="md"

            flexDirection="column"
            key={result._source.id}
        >
            <Link
                fontSize="xl"
                fontWeight="bold"
                href={generateLink(result)}
                pb="10"
                color="blue.600"
            >
                <Text>{result._source.title}</Text>
            </Link>
            <Text>
                <div
                    dangerouslySetInnerHTML={{
                        __html: `${result.highlight
                            ? result.highlight.originalText[0]
                            : ""
                            }`,
                    }}
                ></div>
            </Text>
        </Box>
    )
}
