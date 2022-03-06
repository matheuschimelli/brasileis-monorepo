import React from "react";
import {
  Box,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { PricingCard } from "../components/Pricing/PricingCard";
import { ActionButton } from "../components/Pricing/ActionButton";
import { useMutate } from "../lib/hooks";
import { useAuth } from "../lib/auth";

function PricingIcon() {
  const accentColor = useColorModeValue("blue.600", "blue.200");

  return (
    <Icon boxSize={12} color={accentColor}>
      <path
        fill="currentColor"
        d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
      />
    </Icon>
  );
}

export default function PrecoPage() {
  const { user, logout, showAuthPropmpt, token } = useAuth();
  const checkout = useMutate();

  const startCheckout = async () => {
    const authToken = token;

    const response = await checkout.mutate(
      1,
      "POST",
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/checkout/create-session`,
      {
        priceId: "price_1JzQdKLTXJv5fJAh9w8MSPMl",
        authToken,
      },
      authToken!
    );


    if (response) {
      const res = await response.json();
      if (res) {
        console.log("response", res);
        window.location.href = res.url;
      }
    }
  };

  return (
    <DefaultLayout title="Preços e Planos">
      <Text align="center" fontSize="5xl" fontWeight="bold" as="h1">
        Planos e preços
      </Text>
      <Text align="center" fontSize="2xl" as="h2" pb="20">
        Nossos preços são simples e claros. Um plano para o que você precisa
      </Text>
      <Box
        as="section"
        py="14"
        px={{ base: "4", md: "8" }}
        display="flex"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
      >
        <PricingCard
          zIndex={1}
          isPopular
          transform={{ lg: "scale(1.05)" }}
          data={{
            price: "R$ 9,99",
            name: "Pro",
            features: [
              "Biblioteca de leis",
              "Links e referencias legais",
              "Faça anotações e salve na sua biblioteca",
            ],
          }}
          icon={PricingIcon}
          button={
            user ? (
              <ActionButton
                onClick={startCheckout}
                isLoading={checkout.loading[1]}
              >
                Assinar agora
              </ActionButton>
            ) : (
              <ActionButton
                onClick={showAuthPropmpt}
                isLoading={checkout.loading[1]}
              >
                Fazer login para assinar
              </ActionButton>
            )
          }
        />
      </Box>
      <Box
        as="section"
        bg="facebook.500"
        py="14"
        px={{ base: "4", md: "8" }}
        display="flex"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        borderRadius="md"
      >
        <Text fontSize="medium" maxW="2xl" as="p" color="white">
          O valor cobrado refere-se ao uso da plataforma e disponibilização dos
          recursos exclusivos do Brasileis.com.br. A assinatura é cobrada de
          forma mensal e renovada automaticamente, podendo ser cancelada a
          qualquer momento. O pagamento é processado pelo Stripe. Não
          armazenamos nem temos acesso a dados de cartão de crédito.
        </Text>
      </Box>
    </DefaultLayout>
  );
}
