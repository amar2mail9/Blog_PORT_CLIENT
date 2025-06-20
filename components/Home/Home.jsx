"use client";
import React from "react";
import IntroPage from "./IntroPage";
import RecentPost from "./RecentPost";
import FeaturedWork from "./FeaturedWork";
import MainPosts from "../Page/BlogLandingPage/MainPost/MainPosts";

const Home = () => {
  return (
    <section>
      <IntroPage />
      <RecentPost />
      <FeaturedWork />
      <MainPosts />
    </section>
  );
};

export default Home;
