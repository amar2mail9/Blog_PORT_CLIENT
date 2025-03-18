"use client";
import { blogData } from "@/context/BlogData";
import { useParams } from "next/navigation";

import React from "react";

const CategoryWiseBlog = () => {
  const { category } = useParams();

  const blogs = blogData.find((blog) => blog.category === category);

  console.log(blogs);

  return <div></div>;
};

export default CategoryWiseBlog;
