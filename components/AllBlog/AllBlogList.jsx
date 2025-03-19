"use client";
import React from "react";

import LatestPost from "../Page/BlogLandingPage/MainPost/LatestPost";
import TopSection from "./TopSection";

const AllBlogList = () => {
  return (
    <main className="lg-px[10%] sm:px-[5%] px-10 bg-gray-900 text-white">
      <section className="w-full flex justify-between flex-col md:flex-row">
        <TopSection />
        <LatestPost />
      </section>
    </main>
  );
};

export default AllBlogList;
