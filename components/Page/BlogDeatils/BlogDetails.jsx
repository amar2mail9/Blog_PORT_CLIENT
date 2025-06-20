"use client";

import AddComments from "@/components/comments/AddComments";
import ShowComments from "@/components/comments/ShowComments";
import Spinner from "@/components/Spinner";

import "./tailwindremove.css";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const fetchBlogDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/${slug}`
      );

      const data = await res.json();

      setBlog(data.data);
    } catch (error) {
      console.log(error.error);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, [slug]);
  return (
    <>
      {blog === null ? (
        <Spinner />
      ) : (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
          <h1 className="text-3xl font-semibold mb-4 text-blue-500">
            {blog.title}
          </h1>
          <div className="w-full h-fit rounded-lg shadow-xl  overflow-hidden ">
            <img
              src={blog?.thumbnail}
              alt={blog?.title}
              className="w-full h-full object-cover object-center zoom-image"
            />
          </div>
          <div
            className="no-tailwind"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
      )}
    </>
  );
};

export default BlogDetails;
