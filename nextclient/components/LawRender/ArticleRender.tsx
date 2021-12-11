import React, { useState } from 'react'
import Link from 'next/link'
import { Text, Box, Menu, MenuButton, MenuItem, useDisclosure, MenuList, Button, useClipboard, useToast } from '@chakra-ui/react'
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

export const ArticleRender = ({ article }: { article: any }) => {
    const [xPosition, setXPosition] = useState()
    const [yPosition, setYPosition] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState('')
    const { hasCopied, onCopy } = useClipboard(value)
    const toast = useToast()


    const handleOpenOptions = (e: any) => {
        e.preventDefault();
        setXPosition(e.clientX)
        setYPosition(e.clientY)
        console.log(e)
    }

    const handleCopyClipboard = (value: string) => {
        setValue(value)
        onCopy()
        toast({
            title: 'Copiado.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
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

                    </MenuButton>
                    <MenuList>
                        <MenuItem>Abrir Artigo</MenuItem>
                        <MenuItem onClick={() => handleCopyClipboard(article.value)}>Copiar</MenuItem>
                    </MenuList>
                </Menu>
                <Link href={`/finder/${article.identifier}/${article.id}`} passHref>
                    <Box as="a" cursor="pointer" color="blue.600" fontWeight="bold" onClick={handleOpenOptions}>
                        <RenderType articleType={article.type} /> {article.name}
                    </Box>
                </Link>
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
