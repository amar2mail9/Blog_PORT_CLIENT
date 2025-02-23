import React from "react";
import SwiperBlog from "./SwiperBlog";
import RecentPost from "./RecentPosts/RecentPost";
import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";

import MainPosts from "./MainPost/MainPosts";

const BlogLandingPage = () => {
  return (
    <section>
      <SwiperBlog />
      <RecentPost />
      <FeaturedBlog />
      <MainPosts />
    </section>
  );
};

export default BlogLandingPage;
