import React from "react";
import {
    Box,
    Divider,
    Flex,
    Text,
} from "@chakra-ui/react";
import SidebarLawBlocks from "./SidebarLawBlocks";
import { JurisprudenciaRender } from "./JurisprudenciaRender";
import dayjs from "../lib/dayjs";

export default function JurisprudenciaFinder({ data }: { data: any }) {

    return (
        <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
            <Flex shadow={["none", "none", "base"]} flexDirection={["column-reverse", "column-reverse", "row"]}>
                <Box flex="1" padding={["4", "4", "1em 80px 5em 80px"]}>
                    <Text fontSize={["xl", "xl", "2xl"]} fontWeight="bold" as="h1">
                        {data.title}
                    </Text>
                    <Text as="h3" fontSize="xl" fontWeight="bold" mb="5">Ementa para citação</Text>

                    <Box pb="10">
                        <Text fontSize={16} textAlign="justify" lineHeight="short">
                            {data.ementa}
                        </Text>
                    </Box>
                    <Divider />

                    <Text as="h3" fontSize="xl" fontWeight="bold" mb="5" mt="5">Inteiro teor</Text>

                    {data.integra.map((e: any, key: number) => {
                        return (
                            <JurisprudenciaRender jurisprudencia={e} key={key} />
                        )
                    })}

                </Box>

                <SidebarLawBlocks title={data.title} fixContent>
                    <Text as="h3" fontSize="large" fontWeight="bold" mb="5" >Dados da jurisprudência</Text>

                    <Box as="li">
                        <Box as="a" href={data.source}>Fonte original ({data.tribunal.name})</Box>
                    </Box>
                    <Box as="li">
                        Data julgamento:
                        <Box as="time" dateTime={data.dataJulgamento}>
                            {" "}{dayjs(data.dataJulgamento).format("DD/MM/YYYY")}
                        </Box>
                    </Box>
                    <Box as="li">
                        Tribunal: {data.tribunal.name}
                    </Box>
                    <Box as="li">
                        Estado: {data.estado}
                    </Box>
                    <Box as="li">
                        Comarca: {data.comarca}
                    </Box>
                    <Box as="li">
                        Número do Processo: {data.numeroProcesso}
                    </Box>
                    <Box as="li">
                        Órgão julgador: {data.orgaoJulgador}
                    </Box>
                    <Box as="li">
                        Relator: <Box as="a" href={`/jurisprudencia/search/relator?=${data.relator}`}>{data.relator}</Box>
                    </Box>
                    <Box as="li">
                        Segredo de Justiça:{data.segredoDeJustica}
                    </Box>
                </SidebarLawBlocks>
            </Flex>
        </Box>
    );
}
