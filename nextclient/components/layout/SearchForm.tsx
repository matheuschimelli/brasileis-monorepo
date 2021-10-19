import { Box, Input } from "@chakra-ui/react";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";

export default function SearchForm({ searchQuery }: { searchQuery?: string }) {
  const preventDefault = (f: any) => (e: any) => {
    e.preventDefault();
    f(e);
  };
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleParam = (setValue: any) => (e: any) => setValue(e.target.value);

  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: "/busca",
      query: { q: query },
    });
  });
  const memoizedVal = useMemo(() => {
    if (query && query !== "") {
      return query;
    }
    if (searchQuery) return searchQuery;
  }, [searchQuery, query]);

  return (
    <Box
      width={{ base: "container.sm" }}
      display={{ base: "none", md: "flex" }}
      as="form"
      onSubmit={handleSubmit}
    >
      <Input
        variant="filled"
        placeholder="Pesquisar"
        type="text"
        name="1"
        value={memoizedVal}
        onChange={handleParam(setQuery)}
        aria-label="Search"
      />
    </Box>
  );
}
