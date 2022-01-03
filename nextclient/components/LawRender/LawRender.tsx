import React from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ArticleRender } from "./ArticleRender";
import SidebarLawBlocks from "../SidebarLawBlocks";
import LawTabs from "./LawTabs";

export default function LawRender({ data }: { data: any }) {
  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
      <Flex shadow={["none", "none", "base"]} flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Box flex="1" padding={["4", "4", "1em 80px 5em 80px"]}>
          <Text fontSize={["xl", "xl", "3xl"]} fontWeight="bold">
            {data.details.title}
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

        <SidebarLawBlocks title={data.details.title} fixContent>
          <LawTabs data={data.content} />
        </SidebarLawBlocks>
      </Flex>
    </Box>
  );
}
