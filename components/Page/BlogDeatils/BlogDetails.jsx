"use client";

import { blogData } from "@/context/BlogData";
import { useParams } from "next/navigation";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((b) => b.slug === slug);
  console.log(blog);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 className="text-3xl font-semibold text-pink-500">{blog.title}</h1>
      <div className="w-full h-fit rounded-lg shadow-xl  overflow-hidden ">
        <img
          src={blog.featuredImage}
          alt={blog?.title}
          className="w-full h-full object-cover object-center zoom-image"
        />
      </div>
      {<div dangerouslySetInnerHTML={{ __html: blog.content }} /> || (
        <p>{blog.content}</p>
      )}
    </div>
  );
};

export default BlogDetails;
