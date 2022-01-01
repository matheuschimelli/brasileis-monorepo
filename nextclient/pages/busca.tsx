import React from 'react'
import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import SearchPage from "../components/SearchPage";

type Props = {
  searchTerm?: string;
  results?: [];
  searchQuery?: string;
  error?: boolean;
  total?: any;
};

export default function Busca({ results, error, total, searchQuery }: Props) {
  return (
    <DefaultLayout title="Feed e biblioteca de Leis" searchQuery={searchQuery}>
      <SearchPage results={results} error={error} total={total} />

    </DefaultLayout>
  );
};



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.q;
  const page = query.p
  const sanitizedQuery = searchQuery
    ?.toString()
    .trim()
    .toLowerCase()
    .normalize();

  if (!!sanitizedQuery) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/search?q=${sanitizedQuery}&p=${page}`
      );

      const data = await response.json();

      console.log(data);

      if (!data.results || data.results.lenght == 0) {
        return {
          props: {
            error: true,
          },
        };
      }

      return {
        props: {
          total: data.total,
          results: data.results,
          searchQuery,
          error: false,
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
