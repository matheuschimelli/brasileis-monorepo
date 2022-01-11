import React from "react";
import { NextSeo } from "next-seo";

import Header from "./Header";
import { Footer } from "./Footer";
import { Stack, Box } from "@chakra-ui/react";
import MobileNav from './MobileNav'

type Props = {
  children: React.ReactNode;
  title: string;
  searchQuery?: string;
};
export default function DefaultLayout({ children, title, searchQuery }: Props) {
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          type: "website",
        }}
      />
      <Header searchQuery={searchQuery} />
      <Stack as="main" px={{ base: "0", sm: "4", md: "20" }} py={["0", "0", "0"]}>
        <Box mt={["0", "0", "0"]}>{children}</Box>
      </Stack>
      <MobileNav />
      <Footer />
    </>
  );
}
