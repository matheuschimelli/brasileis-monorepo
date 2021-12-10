import React, { useState } from 'react'
import Link from 'next/link'
import { Text, Box, Menu, MenuButton, MenuItem, useDisclosure, MenuList, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
const RenderType = ({ articleType }: any) => {
    switch (articleType) {
        case "ARTIGO_LEI":
            return <>Art. </>;

        case "PARAGRAFO_UNICO_LEI":
            return <></>;

        case "PARAGRAFO_LEI":
            return <>§</>;

        case "INCISO_LEI":
            return <></>;

        case "ALINEA_LEI":
            return <></>;

        case "":
            return <>Parágrafo Único:</>;

        default:
            return <>Art. </>;
    }
};

const OptionsBox = ({ isOpen, left, top }) => {
    return (
        <Box bg="facebook.50" position="absolute" left={left} top={top}>Ola mundo</Box>
    )
}
export const ArticleRender = ({ article }: { article: any }) => {
    const [xPosition, setXPosition] = useState()
    const [yPosition, setYPosition] = useState()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpenOptions = (e: any) => {
        e.preventDefault();
        setXPosition(e.clientX)
        setYPosition(e.clientY)

        console.log(e)
    }
    return (
        <>
            {/* <OptionsBox left={xPosition} top={yPosition} isOpen="true" /> */}

            <Text
                fontSize="17px"
                style={{ textIndent: "2em" }}
                lineHeight="normal"
                mt="1em"
                mb="1em"
            >
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size='xs'>
                        <Link href={`/finder/${article.identifier}/${article.id}`} passHref>
                            <Box as="a" cursor="pointer" color="blue.600" fontWeight="bold" onClick={handleOpenOptions}>
                                <RenderType articleType={article.type} /> {article.name}
                            </Box>
                        </Link>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Abrir Artigo</MenuItem>
                        <MenuItem>Copiar</MenuItem>
                    </MenuList>
                </Menu>
                {" "}
                {article.value}
                {article.content &&
                    article.content.map((subArticles: any) => {
                        return (
                            <ArticleRender
                                article={subArticles}
                                key={article.value}
                            />
                        );
                    })}
            </Text>
        </>
    );
};
