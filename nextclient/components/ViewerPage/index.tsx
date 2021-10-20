import React from "react";
import { Box, Stack, Flex, Heading, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";

export default function Viewer({ data }: { data: any }) {
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
        >
          <Heading fontSize="xl" fontWeight="bold">
            {data.title}
          </Heading>
        </Flex>

        <Stack spacing={{ base: "8", md: "10" }} flex="3">
          <Stack spacing="6">
            <Box padding="4" borderRadius="md" flexDirection="column">
              <Heading fontSize="2xl" fontWeight="bold">
                {data.title}
              </Heading>
              <Text>
                <div
                  className={styles.htmlRender}
                  dangerouslySetInnerHTML={{ __html: data.htmlContent }}
                ></div>
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
