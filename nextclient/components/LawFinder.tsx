import React from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from 'next/link'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'

import { ArticleRender } from "./LawRender/ArticleRender";
import SidebarLawBlocks from "./SidebarLawBlocks";

export default function LawFinder({
  lawBlockData,
  codeNumbersData }: {
    lawBlockData: any,
    codeNumbersData: any[]
  }) {

  const getNextLink = () => {
    const nextItem = codeNumbersData.find(({ name }) => name == (Number(lawBlockData.block.name) + 1).toString())
    return nextItem
  }

  const getPreviusLink = () => {
    const previusItem = codeNumbersData.find(({ name }) => name == (Number(lawBlockData.block.name) - 1).toString())
    return previusItem
  }


  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }}>
      {getPreviusLink() &&
        <Box
          w="100%"
          background="#f2f1ef"
          p="2"
          shadow={["none", "none", "base"]}
          display="flex"
          flexDir="row"
          justifyContent="space-between"
          position="sticky"
          top={["0.2", "0.2", "72px"]}
          zIndex="docked"
        >

          <Link passHref href={`/finder/${getPreviusLink().slug.value}/${getPreviusLink().id}`}>
            <Button
              as="a"
              colorScheme='blue'
              variant="outline"
              size="sm"
              leftIcon={<ArrowBackIcon />}>
              Artigo {getPreviusLink().name}
            </Button>
          </Link>


          <Link passHref href={`/finder/${getNextLink().slug.value}/${getNextLink().id}`}>
            <Button
              as="a"
              colorScheme='blue'
              variant="outline"
              size="sm"
              rightIcon={<ArrowForwardIcon />}>
              Artigo {getNextLink().name}
            </Button>
          </Link>
        </Box>
      }

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
                  <Button
                    colorScheme='blue'
                    variant="outline"
                    w="10"
                    as="a"
                  >
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
          <Box px="4">
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
