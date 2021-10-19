import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { FooterHeading } from "./FooterHeading";

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Soluções</FooterHeading>
      <Stack>
        <Link>Como funciona</Link>
        <Link>Preço</Link>
        <Link>Casos de uso</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link>Politica de Privacidade</Link>
        <Link>Termos de uso</Link>
        <Link>Jurídico</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
