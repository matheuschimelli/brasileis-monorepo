import React from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import Sidebar from './Sidebar'
import { ArticleRender } from "./ArticleRender";
export default function LawRender({ data }: { data: any }) {
  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "8", md: "12" }}>
      <Flex shadow="2xl" flexDirection={{ sm: "column-reverse", md: "row" }}>
        <Box flex="1" padding="1em 80px 5em 80px">
          <Text fontSize="3xl" fontWeight="bold">
            Código de Defesa do Consumidor
          </Text>

          {data.content.map((article: any) => {
            return (
              <>
                <ArticleRender
                  article={article}
                  key={article.name}
                />
              </>
            );
          })}
        </Box>

        <Sidebar title="Código de Defesa do Consumidor" data={data.content}>

        </Sidebar>
      </Flex>
    </Box>
  );
}
