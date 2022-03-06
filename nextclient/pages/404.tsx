import React from "react";
import { Text, Center } from "@chakra-ui/react";
import DefaultLayout from "../components/layout/DefaultLayout";

export default function Error404Page() {
    return (
        <DefaultLayout title="404 - Nada encontrado">
            <Center display="flex" flexDir="column">
                <Text as="h1" fontSize="xxx-large" py="10" fontWeight="bold">
                    404
                </Text>

                <Text as="h1" fontSize="2xl" py="10">
                    Ops. Nada encontrado. Parece que esse link não existe.
                </Text>
            </Center>
        </DefaultLayout>
    );
};

