import React from "react";
import { Text, Center } from "@chakra-ui/react";
import DefaultLayout from "../components/layout/DefaultLayout";

export default function Errror500Page() {
    return (
        <DefaultLayout title="500 - Algo deu errado">
            <Center display="flex" flexDir="column">
                <Text as="h1" fontSize="xxx-large" py="10" fontWeight="bold">
                    500
                </Text>

                <Text as="h1" fontSize="2xl" py="10">
                    Algo deu errado. Estamos trabalhando para arrumar isso.
                    Tente acessar essa página mais tarde
                </Text>
            </Center>
        </DefaultLayout>
    );
};

