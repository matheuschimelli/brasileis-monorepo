import { Box, Button, Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import * as ga from '../../lib/ga'

export default function SearchForm({ searchQuery }: { searchQuery?: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>()

  const sendEventToGA = () => {
    ga.event({
      action: "search",
      params: {
        search_term: query
      }
    })
  }

  const preventDefault = (f: any) => (e: any) => {
    e.preventDefault();
    f(e);
  };

  const handleParam = (e: any) => setQuery(e.target.value);

  const handleSubmit = preventDefault(() => {
    sendEventToGA()

    router.push({
      pathname: "/busca",
      query: { q: query },
    });
  });

  const clearInput = (e: any) => {
    e.preventDefault();
    setQuery("");
    inputRef.current!.focus()
  }


  return (
    <Box
      width={{ base: "container.sm" }}
      display={{ md: "flex" }}
      as="form"
      onSubmit={handleSubmit}

    >
      <InputGroup>

        <Input
          //@ts-ignore  
          ref={inputRef}
          variant="filled"
          placeholder="Pesquisar"
          name="q"
          onChange={handleParam}
          value={query}
          autoComplete="off" />

        <InputRightElement w="6rem"
          children={
            <Box display="flex" flexDir="row" gridGap="1">
              {query !== "" ? (<Button type="button" size='sm' onClick={clearInput}>
                <Center>
                  <CloseIcon />
                </Center>
              </Button>) : (<></>)}
              <Button type="submit" size='sm' onClick={handleSubmit}>
                <Center>
                  <SearchIcon />
                </Center>
              </Button>

            </Box>
          }
        />
      </InputGroup>
    </Box>
  );
}
