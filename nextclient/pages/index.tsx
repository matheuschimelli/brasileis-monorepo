import type { GetServerSideProps, NextPage } from "next";

import DefaultLayout from "../components/layout/DefaultLayout";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import React from "react";

export default function IndexPage() {
  return (
    <DefaultLayout title="Feed e biblioteca de Leis">
      <Hero />
      <Features />
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies: { token } } }) => {

  if (token) return {
    redirect: {
      permanent: false,
      destination: "/feed",
    }, props: { none: true }

  }

  return {
    props: {
      none: true
    }
  }
};
