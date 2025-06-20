import AllBlogList from "@/components/AllBlog/AllBlogList";
import React from "react";

export const metadata = {
  title: "View All Blogs",
  description:
    "A personal portfolio and blog where I showcase projects, share knowledge, and experiment with the latest tech.",
};
const AllBlog = () => {
  return (
    <>
      <AllBlogList />
    </>
  );
};

export default AllBlog;
