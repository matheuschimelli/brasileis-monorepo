import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Text
} from "@chakra-ui/react";

export default function Success() {
  return (
    <DefaultLayout title="Assinatura">

      <Flex px={4} py={32} mx="auto">
        <Box w="full" mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }} border="2px" borderColor="green.500" padding="6" borderRadius="md">
          <chakra.p
            mb={2}
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            color="gray.400"
            textTransform="uppercase"
          >
            Assinatura conclúida
          </chakra.p>
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="tall"
            color={useColorModeValue("gray.900", "white")}

          >
            Agora você é um usuário <Text padding="1" backgroundColor="gold" borderRadius="md" w="min">PRO</Text>
          </chakra.h1>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
            Agora você possui acesso ilimitado às leis, decretos e jurisprudências, além de poder organizar tudo na sua biblioteca.
          </chakra.p>
          <HStack>
            <Button
              as="a"
              w={{ base: "full", sm: "auto" }}
              variant="solid"
              colorScheme="facebook"
              size="lg"
              mb={{ base: 2, sm: 0 }}
              cursor="pointer"
              href="/"
            >
              Começar a usar
            </Button>
            <Button
              as="a"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              href="/assinatura"
            >
              Gerenciar Assinatura
            </Button>
          </HStack>
        </Box>
      </Flex>
    </DefaultLayout>

  );
};

