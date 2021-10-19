import { Box, Heading, Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Heading size="3xl" fontWeight="extrabold" letterSpacing="tight">
          O feed de leis que você precisa
        </Heading>
        <Text mt="4" fontSize="lg">
          Com o Brasileis você tem um feed de leis que atualiza automaticamente
          para que você nunca fique desatualizado
        </Text>
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          Criar uma conta
        </Button>
      </Box>
    </Box>
  );
}
