import type { GetStaticProps, GetStaticPaths } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import Viewer from "../../components/ViewerPage";
import client from "../../lib/graphql";
import { gql } from "@apollo/client";

type Props = {
  data?: any;
};

const Busca = ({ data }: Props) => {
  return (
    <DefaultLayout title={data.title}>
      <Viewer data={data} />
    </DefaultLayout>
  );
};

export default Busca;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as any;
  try {
    const { data } = await client.query({
      query: gql`
        query Law($slug: String!) {
          Law(slug: $slug) {
            title

            categories {
              name
              slug
            }
            subCategories {
              name
              slug
            }
            htmlContent
          }
        }
      `,
      variables: { slug },
    });
    console.log(data);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.Law,
      },
      revalidate: true,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
