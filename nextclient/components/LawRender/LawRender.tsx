import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ArticleRender } from "./ArticleRender";
import SidebarLawBlocks from "../SidebarLawBlocks";
import LawTabs from "./LawTabs";

export default function LawRender({ data, slug, id }: { data: any, slug: string, id: string }) {

  const [articles, setArticles] = useState(data.content);
  const [currentPage, setCurrentPage] = useState(2);
  const [hasEndingPosts, setHasEndingPosts] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage(old => old + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);


  useEffect(() => {
    const handleResquest = async () => {
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/law-block/${slug}/${id}?skip=${currentPage * 10}`)
      const data = await fetchData.json()

      if (!data.content.length) {
        setHasEndingPosts(true);
        return;
      }

      setArticles([...articles, ...data.content]);
    }
    handleResquest();
  }, [currentPage]);

  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} py={{ base: "0", md: "1" }}>
      <Flex shadow={["none", "none", "base"]} flexDirection={["column-reverse", "column-reverse", "row"]}>
        <Box flex="1" padding={["4", "4", "1em 80px 5em 80px"]}>
          <Text fontSize={["xl", "xl", "3xl"]} fontWeight="bold">
            {data.details.title}
          </Text>

          {articles.length !== 0 && articles.map((article: any) => {
            return (
              <>
                <ArticleRender
                  article={article}
                  key={article.name}
                />
              </>
            );
          })}
          {!hasEndingPosts && <p ref={loaderRef}>Carregando mais artigos...</p>}

        </Box>

        <SidebarLawBlocks title={data.details.title} fixContent>
          <LawTabs data={articles} />
        </SidebarLawBlocks>
      </Flex>
    </Box>
  );
}
