import React from "react";
import SwiperBlog from "./SwiperBlog";
import RecentPost from "./RecentPosts/RecentPost";

const BlogLandingPage = () => {
  return (
    <section>
      <SwiperBlog />
      <RecentPost />
    </section>
  );
};

export default BlogLandingPage;
