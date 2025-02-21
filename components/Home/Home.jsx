"use client";
import React from "react";
import IntroPage from "./IntroPage";
import RecentPost from "./RecentPost";
import FeaturedWork from "./FeaturedWork";
const Home = () => {
  return (
    <section>
      <IntroPage />
      <RecentPost />
      <FeaturedWork />
    </section>
  );
};

export default Home;
