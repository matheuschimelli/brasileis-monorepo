import React, { useState } from 'react'
import Link from 'next/link'
import {
    Text,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    useDisclosure,
    MenuList,
    IconButton,
    useToast
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { copyToClip } from '../../lib/utils';

const RenderType = ({ articleType }: any) => {
    switch (articleType) {
        case "ARTIGO_LEI":
            return <>Art.</>;

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
            return <>Art.</>;
    }
};

export const ArticleRender = ({ article, renderContent }: { article: any, renderContent?: boolean }) => {
    const [xPosition, setXPosition] = useState()
    const [yPosition, setYPosition] = useState()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()


    const handleOpenOptions = (e: any) => {
        e.preventDefault();
        setXPosition(e.clientX)
        setYPosition(e.clientY)
        console.log(e)
    }

    const handleCopyClipboard = (value: string) => {
        copyToClip(value)
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
                mt="1em"
                mb="1em"
            >
                <Box display="flex" flexDir={["column", "column", "row"]} alignItems="baseline">
                    <Menu>
                        <MenuButton as={IconButton} icon={<ChevronDownIcon />} size='xs' colorScheme='blue' mr="2" variant='outline' aria-label='Opções do Artigo'>

                        </MenuButton>
                        <MenuList>
                            <Link href={`/finder/${article.identifier}/${article.id}`} passHref>
                                <MenuItem as="a">Abrir Artigo</MenuItem>
                            </Link>
                            <MenuItem onClick={() => handleCopyClipboard(article.value)}>Copiar</MenuItem>
                        </MenuList>
                    </Menu>
                    <Box>
                        <Text
                            fontSize={["0.9em", "0.9em", "1em"]}
                            mt="1em"
                            mb="1em"
                            style={{ textIndent: "2em" }}
                        >
                            <Link href={`/finder/${article.identifier}/${article.id}`} passHref>
                                <Box as="a" cursor="pointer" color="blue.600" fontWeight="bold">
                                    <RenderType articleType={article.type} /> {article.name}
                                </Box>
                            </Link>
                            {" "}
                            {article.value}
                        </Text>

                        {renderContent && article.content &&
                            article.content.map((subArticles: any) => {
                                return (
                                    <ArticleRender
                                        article={subArticles}
                                        key={article.value}
                                    />
                                );
                            })
                        }

                    </Box>
                </Box>
            </Text>
        </>
    );
};
