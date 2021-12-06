import React from "react";
import Link from "next/link";
import { Box, SimpleGrid, SimpleGridProps, Stack } from "@chakra-ui/react";
import { FooterHeading } from "./FooterHeading";

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Soluções</FooterHeading>
      <Stack>
        <Link href="/como-funciona">Como funciona</Link>
        <Link href="/preco">Preço</Link>
        <Link href="/casos-de-uso">Casos de uso</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">O Brasileis</FooterHeading>
      <Stack>
        <Link href="/ajuda">Ajuda e contato</Link>
        <Link href="/politica-de-privacidade">Politica de Privacidade</Link>
        <Link href="/termos-de-uso">Termos de uso</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
