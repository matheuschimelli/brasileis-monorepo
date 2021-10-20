import type { NextPage } from "next";

import DefaultLayout from "../../components/layout/DefaultLayout";
import Hero from "../../components/layout/Hero";
import Features from "../../components/layout/Features";
import React from "react";

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Painel">
      <Hero />
      <Features />
    </DefaultLayout>
  );
};

export default Home;
