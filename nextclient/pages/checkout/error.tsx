import React from "react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,

} from "@chakra-ui/react";

export default function ErrorPage() {
  return (
    <DefaultLayout title="Assinatura">

      <Flex px={1} py={32} mx="auto" >
        <Box mx="auto" w={{ lg: 8 / 12, xl: 5 / 12 }} border="2px" borderColor="red.500" padding="6" borderRadius="md">
          <chakra.p
            mb={2}
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            color="gray.400"
            textTransform="uppercase"
          >
            Erro ao assinar
          </chakra.p>
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "white")}
          >
            Erro ao realizar assinatura
          </chakra.h1>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: "md" }}>
            Não foi possível concluir sua assinatura, por isso o valor pago não foi debitado. Se isso ocorreu, por favor entre em contato conosco
          </chakra.p>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: "md" }}>
            Possíveis causas do erro (não necessariamente se aplica a todos os casos):
            <br />
            <chakra.li mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Cartão de crédito expirou / Cartão com insuficiência de créditos
            </chakra.li>
            <chakra.li mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Cartão não é valido ou não aceito
            </chakra.li>
            <chakra.li mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Você já possui uma assinatura em curso
            </chakra.li>
            <chakra.li mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Você não pode assinar devido a violação da nossa política de uso
            </chakra.li>
            <chakra.li mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Nosso sistema ou nosso parceiro que realiza o processamento não conseguiu efetuar a cobrança
            </chakra.li>
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
              href="/preco"
            >
              Tentar novamente
            </Button>
            <Button
              as="a"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
              href="/ajuda"
            >
              Ajuda
            </Button>
          </HStack>
        </Box>
      </Flex>
    </DefaultLayout>

  );
};

