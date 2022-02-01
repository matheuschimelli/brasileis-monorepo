import { Box, Stack, Heading, Text, Flex, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import SearchPagination from "./Pagination";
import SearchFilter from "./SearchFilter";

type Props = {
  results?: [];
  total?: any;
  error?: boolean;
};

export default function SearchPage({ results, total, error }: Props) {

  const handleOptionsChange = (options: any[]) => {

  }

  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "8", md: "12" }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Flex
          direction="column"
          align="start"
          flex="1"
          padding="4"
          backgroundColor="gray.100"
          borderRadius="md"
          position="sticky"
          top="20"
        >
          <Text fontSize="xl" >
            Filtrar
          </Text>
          <Box mt="10" w="100%">
            <SearchFilter onChange={(e) => handleOptionsChange(e)} />
          </Box>
        </Flex>

        {error ? (
          <Stack spacing={{ base: "8", md: "10" }} flex="3">
            <Box
              padding="4"
              borderRadius="md"
              _hover={{ backgroundColor: "gray.50" }}
              flexDirection="column"
            >
              <Heading fontSize="xl" fontWeight="bold" pb="10">
                Nada encontrado
              </Heading>
              <Text>
                Nenhum resultado para termo buscado não foi encontrado. Tente
                outro termo
              </Text>
            </Box>
          </Stack>
        ) : (
          <Stack spacing={{ base: "8", md: "4" }} flex="3">
            <Text as="span" color="gray.700">
              {total.value} Resultados
            </Text>

            <Stack spacing="2">
              {results?.map((result: any) => {
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
                      href={`/finder/${result._source.slug}/${result._id}`}
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
                );
              })}
            </Stack>

            <SearchPagination total={total!.value as number} />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
