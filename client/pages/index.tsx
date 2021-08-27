import React from "react";

import DefaultLayout from "../components/layouts/DefaultLayout";
import FeaturesHeader from "../components/Landing/FeaturesHeader";
import Features from "../components/Landing/Features";
import GetStarted from "../components/Landing/GetStarted";
// import Announcement from '../components/Landing/Announcement';

const Home = () => (
  <DefaultLayout>
    {/* <Announcement/> */}
    <FeaturesHeader />
    <Features />
    <GetStarted />
  </DefaultLayout>
);

export default Home;
