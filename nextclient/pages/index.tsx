import type { NextPage } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import SignIn from "../components/layout/SignIn";

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Feed e biblioteca de Leis">
      <Hero />
      <Features />
      <SignIn />
    </DefaultLayout>
  );
};

export default Home;
