import React from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from 'next/link'

import { ArticleRender } from "./LawRender/ArticleRender";
import SidebarLawBlocks from "./SidebarLawBlocks";

export default function LawFinder({
  lawBlockData,
  codeNumbersData }: {
    lawBlockData: any,
    codeNumbersData: any[]
  }) {
  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
      <Flex shadow={["none", "none", "base"]} flexDirection={["column", "column", "row"]}>
        <SidebarLawBlocks title={lawBlockData.details.title}>

          <Link passHref href={`/l/${lawBlockData.block.slug.value}/${lawBlockData.block.belongsToLawBlockId}`}>
            <Button colorScheme='blue' variant="outline" w="100%" mb="10">
              Abrir Código Completo
            </Button>
          </Link>
          <Text fontSize="xl" fontWeight="thin" mb="5">Artigos</Text>

          <SimpleGrid columns={7} spacing={5}>
            {codeNumbersData.map((lawBlock) => {
              return (
                <Link passHref href={`/finder/${lawBlock.slug.value}/${lawBlock.id}`}>
                  <Button colorScheme='blue' variant="outline" w="10" as="a" >
                    {lawBlock.name}
                  </Button>
                </Link>
              )
            })}
          </SimpleGrid>
        </SidebarLawBlocks>
        <Box flex="1" padding={["2", "0", "1em 80px 5em 80px"]}>
          <Text fontSize={["xl", "xl", "3xl"]} fontWeight="bold" px={["4", "4", "0"]} pt={["4", "4", "0"]}>
            {lawBlockData.details.title}
          </Text>
          <Box shadow="sm" px="4">
            <ArticleRender
              article={lawBlockData.block}
              renderContent
            />
          </Box>
        </Box>

      </Flex>
    </Box >
  );
}
