import React from "react";
import { Box, Text } from "@chakra-ui/react";
import DefaultLayout from "../../components/layout/DefaultLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import getPage from "../../lib/contentful";
import RenderPost from "../../components/RenderPost";

type Props = {
  title: string;
  content: Document;
  page: any;
};

export default function Page(props: Props) {
  return (
    <DefaultLayout title={props.title}>
      <RenderPost content={props.content} title={props.title} />
    </DefaultLayout>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const page: any = await getPage({
    pageContentType: "pages",
    slug: context.params!.slug!.toString(),
  });
  console.log(JSON.stringify(page));

  if (page) {
    return {
      props: {
        page,
        title: page.fields.title,
        content: page.fields.content,
      },
    };
  }
  return {
    props: {},
    notFound: true,
  };
};
