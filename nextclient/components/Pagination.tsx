import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
    Pagination as ChakraPagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
} from "@ajna/pagination";

const Pagination = ({ total, slug, itemsPerPage }: { total: number, slug: string, itemsPerPage: number }) => {

    const router = useRouter()

    const { p } = router.query
    const routerPage = p ? Number(p) : 1

    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pages
    } = usePagination({
        pagesCount: Math.round((total / itemsPerPage)),
        initialState: { currentPage: 1 },
        limits: {
            inner: 1,
            outer: 1
        }
    });

    return (
        <ChakraProvider>

            <ChakraPagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            >
                <PaginationContainer>
                    <PaginationPrevious onClick={() => router.push({ query: { p: (routerPage == 1 ? routerPage : routerPage - 1), id: slug } })}>Anterior</PaginationPrevious>

                    <PaginationPageGroup>
                        {pages.map((page: number) => (
                            <PaginationPage
                                ml={1}
                                mr={1}
                                padding={5}
                                _current={{
                                    padding: 5,
                                    w: 7,
                                    bg: "blue.600",
                                    color: 'white',
                                    fontSize: "sm",
                                    _hover: {
                                        bg: "blue.300"
                                    },
                                }}

                                key={`pagination_page_${page}`}
                                page={page}
                                onClick={() => router.push({ query: { p: page, id: slug } })}
                            />

                        ))}
                    </PaginationPageGroup>

                    <PaginationNext onClick={() => router.push({ query: { p: routerPage + 1, id: slug } })}>Próximo</PaginationNext>
                </PaginationContainer>
            </ChakraPagination>
        </ChakraProvider >
    );
};

export default Pagination;
