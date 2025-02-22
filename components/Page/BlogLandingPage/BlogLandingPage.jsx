import React from "react";
import SwiperBlog from "./SwiperBlog";
import RecentPost from "./RecentPosts/RecentPost";
import FeaturedBlog from "./FeaturedBlog/FeaturedBlog";

const BlogLandingPage = () => {
  return (
    <section>
      <SwiperBlog />
      <RecentPost />
      <FeaturedBlog />
    </section>
  );
};

export default BlogLandingPage;
