"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import { extractDate } from "@/context/TimeFormate";
import { FaUserCircle } from "react-icons/fa";
import { Favorite, Visibility } from "@mui/icons-material";
import { VCFormatter } from "@/context/ViewAndCommentsForamter";
import Spinner from "../Spinner";

const RecentPost = () => {
  const [latestPost, setLatestPost] = useState([]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
      const data = await res.json();
      setLatestPost(data.data);
    } catch (error) {
      console.log("Featuindigo", error.error);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 8px  15px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="w-full py-12 bg-gray-100 lg:px-[10%] md:px-[7%] sm:px-[5%] px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 w-[70%] ">
          <h2 className="md:text-2xl text-xl  font-semibold text-gray-800">
            Recent Posts
          </h2>
          <div className="w-3/12 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <Link href={`/all-blogs`} className="w-[25%] flex justify-end">
          <Button className="!bg-blue-700 !capitalize !text-white">
            View More
          </Button>
        </Link>
      </div>

      {latestPost.length === 0 ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestPost.slice(0, 4).map((post, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-lg shadow-md overflow-hidden my-swiper-slide"
            >
              {/* Top Section */}
              <section className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 text-gray-500">
                    <FaUserCircle className="w-full h-full" />
                  </span>
                  <div className="flex flex-col">
                    <h6 className="text-xs font-semibold text-gray-700">
                      {post.author.fullname}
                    </h6>
                    <p className="text-[9px] text-gray-500">
                      {extractDate(post?.createdAt)}
                    </p>
                  </div>
                </div>
              </section>

              <Link href={`/blog/${post.slug}`}>
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                  />
                </div>{" "}
              </Link>

              {/* Content Section */}
              <section className="p-4">
                <h2 className="text-md font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.expert}
                </p>

                <section>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-blue-50 text-indigo-800 px-4 py-2 rounded-md text-sm hover:bg-blue-100 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </section>

                {/* Icons Section */}
                <section className=" mt-2  flex items-center justify-between text-sm text-gray-500">
                  {/* View and Comments */}
                  <section className="flex gap-4 items-center">
                    <span className="flex items-center gap-1">
                      <Visibility className="text-green-500" />
                      {VCFormatter(post?.views || 10000)}
                    </span>
                    <span className="flex items-center gap-1">
                      <CommentIcon className="text-blue-600" />
                      {VCFormatter(post?.comments?.length || 0)}
                    </span>
                  </section>

                  <section>
                    <Favorite className="text-indigo-500 cursor-pointer hover:text-indigo-600 transition-colors duration-200" />
                  </section>
                </section>
              </section>
            </motion.div>
          ))}
        </section>
      )}
    </section>
  );
};

export default RecentPost;
