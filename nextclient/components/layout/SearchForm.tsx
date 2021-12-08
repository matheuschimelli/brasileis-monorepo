import { Box, Button, Center, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useState, useRef, LegacyRef, EventHandler } from "react";
import { useRouter } from "next/router";

export default function SearchForm({ searchQuery }: { searchQuery?: string }) {
  const preventDefault = (f: any) => (e: any) => {
    e.preventDefault();
    f(e);
  };
  const router = useRouter();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>()

  const handleParam = (e: any) => setQuery(e.target.value);

  const handleSubmit = preventDefault(() => {
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
      display={{ base: "none", md: "flex" }}
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
        <InputRightElement w="5rem"
          children={
            <>
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

            </>
          }
        />
      </InputGroup>
    </Box>
  );
}
