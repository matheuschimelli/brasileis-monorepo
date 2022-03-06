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

export default function BuscaPage({ results, error, total, searchQuery }: Props) {
  return (
    <DefaultLayout title="Feed e biblioteca de Leis" searchQuery={searchQuery}>
      <SearchPage results={results} error={error} total={total} />
    </DefaultLayout>
  );
};



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const searchQuery = query.q;
  const page = query.p
  const filters = query.filters

  const getFilters = () => {
    if (typeof filters == "object") {
      var r = filters.map(e => {
        return JSON.parse(e)
      })
      return r
    } else {
      if (filters) {
        return [JSON.parse(filters)]
      } else {
        return []
      }
    }

  }


  const sanitizedQuery = searchQuery
    ?.toString()
    .trim()
    .toLowerCase()
    .normalize();


  if (!!sanitizedQuery) {
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/search`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: sanitizedQuery,
          p: page,
          filters: getFilters()
        })
      });


      const data = await response.json();


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
