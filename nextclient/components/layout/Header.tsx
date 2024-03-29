import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Button,
  Spacer,
  Stack,
  IconButton,
  useDisclosure,
  Collapse,
  Text,
  useColorModeValue,
  useColorMode,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LoginModal from "./LoginModal";
import SearchForm from "./SearchForm";
import { useAuth } from "../../lib/auth";


type Props = {
  searchQuery?: string;
};

export function HeaderNotAuthenticated({
  searchQuery,
}: {
  searchQuery?: string;
}) {
  const { isOpen, onToggle } = useDisclosure();

  const { user, logout, showAuthPropmpt, token } = useAuth();
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal
  } = useDisclosure()

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
      <Flex
        as="nav"
        flexDirection="row"
        px={{ base: "2", sm: "2", md: "20" }}
        paddingTop="4"
        paddingBottom="4"
        align="center"
        position={{ base: "relative", md: "sticky" }}
        left="0"
        right="0"
        top="0"
        backgroundColor="white"
        shadow="xs"
        zIndex="sticky"
        gridGap="2"
      >
        <Box display={["none", "none", "flex"]}>
          <Link href="/" passHref>
            <Heading as="a" size="md" textTransform="uppercase">
              Brasileis
            </Heading>
          </Link>
        </Box>
        <Spacer />

        <SearchForm searchQuery={searchQuery} />
        {/* <Slide direction="right" in={isOpenSearchbar}>
          <Box
            width={{ base: "container.sm" }}
            display={{ base: "flex", md: "none" }}
            mt="4"

          >

            <SearchForm searchQuery={searchQuery} />
          </Box>
        </Slide> */}

        <Spacer />

        <Stack
          direction="row"
          alignItems="center"
          justifyItems="center"
          display={{ base: "none", md: "flex" }}
          gridGap="5"
        >
          {!user && (
            <>
              <Link href="/casos-uso" passHref>
                <Box
                  as="a"
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="small"
                >
                  Casos de Uso
                </Box>
              </Link>

              <Button
                as="a"
                colorScheme="blue"
                textTransform="uppercase"
                fontSize="small"
                onClick={showAuthPropmpt}
              >
                Entrar
              </Button>
            </>
          )}
          <Link
            href="/indice"
            passHref
          >
            <Box as="a">
              Índice
            </Box>

          </Link>
          {/* <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button> */}
          {user && (
            <Menu isLazy>
              <MenuButton>
                <Image
                  borderRadius="full"
                  boxSize="32px"
                  src={user.profile.picture}
                  alt={user.name}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Biblioteca</MenuItem>
                <MenuItem>Feed</MenuItem>
                <MenuDivider />
                <Link href="configuracoes/minha-conta"><MenuItem>Minha Conta</MenuItem></Link>
                <MenuDivider />
                <MenuItem onClick={logout}>Sair</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyItems="center"
          display={{ base: "flex", md: "none" }}
        >
          {/* <IconButton
            variant="outline"
            colorScheme="blue"
            aria-label="Menu"
            onClick={onToggleSearchBar}
            icon={isOpen ? <CloseIcon /> : <SearchIcon />}
          /> */}
          {/* <IconButton
          
            variant="outline"
            colorScheme="blue"
            aria-label="Menu"
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          /> */}

          {user && (
            <Box w="32px">
              <Menu isLazy>
                <MenuButton>
                  <Image
                    borderRadius="full"
                    boxSize="32px"
                    src={user.profile.picture}
                    alt={user.name}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Biblioteca</MenuItem>
                  <MenuItem>Feed</MenuItem>
                  <MenuDivider />
                  <Link href="configuracoes/minha-conta"><MenuItem>Minha Conta</MenuItem></Link>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Sair</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
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
            cursor="pointer"
            py="2"
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
            onClick={showAuthPropmpt}
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
