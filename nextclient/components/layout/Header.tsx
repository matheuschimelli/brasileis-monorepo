import React, { useCallback, useState } from "react";

import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Link,
  Stack,
  IconButton,
  useDisclosure,
  Collapse,
  Text,
  useColorModeValue,
  Input,
  Slide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import SearchForm from "./SearchForm";

type Props = {
  searchQuery?: string;
};

export function HeaderNotAuthenticated({
  searchQuery,
}: {
  searchQuery?: string;
}) {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpenSearchbar, onToggle: onToggleSearchBar } =
    useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        flexDirection="row"
        px={{ base: "2", sm: "2", md: "20" }}
        paddingTop="4"
        paddingBottom="4"
        align="center"
        position={{ base: "fixed", md: "absolute" }}
        left="0"
        right="0"
        top="0"
        backgroundColor="white"
        shadow="base"
      >
        <Box>
          <Heading as="a" href="/" size="md" textTransform="uppercase">
            Brasileis
          </Heading>
        </Box>
        <Spacer />

        <SearchForm searchQuery={searchQuery} />
        <Slide direction="right" in={isOpenSearchbar}>
          <Box
            width={{ base: "container.sm" }}
            display={{ base: "flex", md: "none" }}
          >
            <Input variant="filled" placeholder="Pesquisar" />
          </Box>
        </Slide>

        <Spacer />

        <Stack
          direction="row"
          alignItems="center"
          justifyItems="center"
          display={{ base: "none", md: "flex" }}
          gridGap="5"
        >
          <Link textTransform="uppercase" fontWeight="bold" fontSize="small">
            Casos de Uso
          </Link>

          <Button
            as="a"
            href="/login"
            colorScheme="blue"
            textTransform="uppercase"
            fontSize="small"
          >
            Entrar
          </Button>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            variant="outline"
            colorScheme="blue"
            aria-label="Menu"
            onClick={onToggleSearchBar}
            icon={isOpen ? <CloseIcon /> : <SearchIcon />}
          />
          <IconButton
            variant="outline"
            colorScheme="blue"
            aria-label="Menu"
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          p="20px"
          color="black"
          mt="4"
          rounded="md"
          shadow="md"
          position={{ base: "fixed" }}
          left="0"
          right="0"
          top="10"
          backgroundColor="white"
        >
          {/* <Lorem count={1} /> */}
          <Text
            as="a"
            href="/"
            py="2"
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Preços
          </Text>
          <Text
            as="a"
            href="/"
            py="2"
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Casos de uso
          </Text>
          <Text
            as="a"
            href="/"
            py="2"
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            Login
          </Text>
        </Box>
      </Collapse>
    </>
  );
}

export default function Header({ searchQuery }: Props) {
  return <HeaderNotAuthenticated searchQuery={searchQuery} />;
}
