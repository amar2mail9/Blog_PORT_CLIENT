"use client";

import React from "react";

import RecentPosts from "./RecentPosts";

const RecentPost = () => {
  return (
    <div className="w-full lg:px-[10%] md:px-[5%] px-10 mx-auto items-start flex bg-white py-8 ">
      <RecentPosts />
    </div>
  );
};

export default RecentPost;
