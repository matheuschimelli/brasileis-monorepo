import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Center,
  Square,
} from "@chakra-ui/react";
import {
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

const List = ({ data }: { data: any[] }) => {
  return (
    <>
      {data.map((article) => {
        return (
          <>
            {/*
          <Flex
            direction="row"
            gridGap="10"
            py="5"
            borderRadius="md"
            _hover={{ backgroundColor: "gray.100" }}
            key={article.number}
          >
            <Flex
              direction="column"
              justifyItems="center"
              alignItems="center"
              justifyContent="center"
              gridGap="4"
              padding="5"
              cursor="pointer"
            >
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<AddIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem icon={<AddIcon />} command="⌘T">
                    Salvar
                  </MenuItem>
                  <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                    Jurisprudência relacionada
                  </MenuItem>
                  <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                    Leis relacionadas
                  </MenuItem>
                  <MenuItem icon={<EditIcon />} command="⌘O">
                    Adicionar em petição
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Text flex="11" flexDirection="row">
              <Text fontWeight="bold">Art. {article.number}</Text>
              {article.text}
            </Text>
          </Flex>
      */}

            <Text flex="11" flexDirection="row" mt="1em" mb="1em">
              <Text fontWeight="bold">Art. {article.number}</Text>
              <Text lineHeight="1.5"> {article.text}</Text>
            </Text>
          </>
        );
      })}
    </>
  );
};

const ArticleRender = ({ article }: { article: any }) => {
  return (
    <Text
      fontSize="17px"
      style={{ textIndent: "2em" }}
      lineHeight="normal"
      mt="1em"
      mb="1em"
    >
      <Link href="/id123/id123">
        <Box as="a" cursor="pointer" color="blue.600" fontWeight="bold">
          {article.number}
        </Box>
      </Link>{" "}
      {article.text}
    </Text>
  );
};
export default function LawRender({ data }: { data: any }) {
  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "8", md: "12" }}>
      <Flex shadow="2xl" flexDirection={{ sm: "column-reverse", md: "row" }}>
        <Box flex="1" padding="1em 80px 5em 80px">
          <Text fontSize="3xl" fontWeight="bold">
            Constituição Federal
          </Text>

          {data.map((article: any) => {
            return (
              <>
                <Text
                  fontSize="17px"
                  style={{ textIndent: "2em" }}
                  lineHeight="normal"
                  mt="1em"
                  mb="1em"
                >
                  <Link href="/id123/id123">
                    <Box
                      as="a"
                      cursor="pointer"
                      color="blue.600"
                      fontWeight="bold"
                    >
                      {article.number}
                    </Box>
                  </Link>{" "}
                  {article.text}
                  {article.incises &&
                    article.incises.map((incise: any) => {
                      return (
                        <Text
                          fontSize="17px"
                          style={{ textIndent: "2em" }}
                          lineHeight="normal"
                          mt="1em"
                          mb="1em"
                        >
                          <Link href="/id123/id123">
                            <Box
                              as="a"
                              cursor="pointer"
                              color="blue.600"
                              fontWeight="bold"
                            >
                              {incise.paragraph}
                            </Box>
                          </Link>{" "}
                          {incise.text}
                        </Text>
                      );
                    })}
                </Text>
              </>
            );
          })}
        </Box>

        <Box
          bg="#f2f1ef"
          width={{ sm: "auto", md: "450px" }}
          position={{ sm: "relative", md: "sticky" }}
          top={{ sm: "0", md: "20" }}
          alignItems="start"
          justifyItems="start"
          justifyContent="start"
          padding="4"
          height="100vh"
        >
          <Text fontSize="2xl" fontWeight="bold">
            Constituição Federal
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
