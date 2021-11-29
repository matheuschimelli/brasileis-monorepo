import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Heading2 } from "@contentful/rich-text-types";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  content: Document;
  title: string;
};

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => (
      <Text as="b" fontWeight="bold">
        {text}
      </Text>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <Text lineHeight="7" textAlign="justify" pb="5" as="p">
        {children}
      </Text>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: any) => (
      <Text fontSize="2xl">{children}</Text>
    ),
  },
  renderText: (text: string) => text.replace("!", "?"),
};

export default function RenderPost(props: Props) {
  return (
    <>
      <Box
        as="article"
        mt="20"
        shadow={["none", "none", "base"]}
        px={[5, 5, 20]}
        py={[5, 5, 10]}
        display="flex"
        flexDir="column"
      >
        <Text fontSize="3xl" as="h1" fontWeight="bold">
          {props.title}
        </Text>
        {/*
 // @ts-ignore */}
        {props.content && documentToReactComponents(props.content, options)}
      </Box>
    </>
  );
}
