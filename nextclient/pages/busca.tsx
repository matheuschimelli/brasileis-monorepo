import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import SearchPage from "../components/SearchPage";
import { Box } from "@chakra-ui/react";

type Props = {
  searchTerm?: string;
  results?: [];
  searchQuery?: string;
  error?: boolean;
  total?: string;
};

const Busca = ({ results, error, total, searchQuery }: Props) => {
  return (
    <DefaultLayout title="Feed e biblioteca de Leis" searchQuery={searchQuery}>
      <SearchPage results={results} error={error} total={total} />
    </DefaultLayout>
  );
};

export default Busca;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.q;
  const sanitizedQuery = searchQuery
    ?.toString()
    .trim()
    .toLowerCase()
    .normalize();

  if (!!sanitizedQuery) {
    try {
      const response = await fetch(
        `${process.env.SERVER_URL!}/api/v1/search?q=${sanitizedQuery}`
      );

      const data = await response.json();

      console.log(data);

      return {
        props: {
          total: data.total,
          results: data.results,
          searchQuery,
        },
      };
    } catch (e) {
      return {
        props: {
          error: true,
        },
      };
    }
  }
  return {
    props: {
      error: true,
    },
  };
};
