import React from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Sidebar from '../components/LawRender/Sidebar'
import { ArticleRender } from "./LawRender/ArticleRender";

export default function LawFinder({ data }: { data: any }) {
  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} pt={{ base: "8", md: "0" }}>
      <Flex flexDirection={{ sm: "column-reverse", md: "row" }}>
        <Box flex="1" padding="1em 80px 5em 80px" display="flex" alignItems="center" justifyContent="center">
          <Box maxW={["full", "full", "600"]} bg="white" padding="5" h="full" shadow="base">
            <Text fontSize="3xl" fontWeight="bold">
              Código de Defesa do Consumidor
            </Text>
            <ArticleRender
              article={data}
              key={data.name}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
