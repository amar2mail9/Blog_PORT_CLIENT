"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { blogData } from "@/context/BlogData";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import { extractDate } from "@/context/TimeFormate";
import { FaUserCircle } from "react-icons/fa";
import { Favorite, Visibility } from "@mui/icons-material";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentPost = () => {
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
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="w-full py-12 bg-gray-100 lg:px-[10%] md:px-[7%] sm:px-[5%] px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 w-[85%]">
          <h2 className="text-3xl font-semibold text-gray-800">Recent Posts</h2>
          <div className="w-3/12 h-1 bg-pink-500 rounded-full"></div>
        </div>
        <Link href={`/all-blogs`}>
          <Button variant="outlined" color="primary">
            View More
          </Button>
        </Link>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogData
          .slice(-4)
          .reverse()
          .map((post, idx) => (
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
                    <h6 className="text-sm font-semibold text-gray-700">
                      {post.author.name}
                    </h6>
                    <p className="text-xs text-gray-500">
                      {extractDate(post.publishedAt)}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <BsThreeDotsVertical className="w-6 h-6 text-gray-500 cursor-pointer" />
                </div>
              </section>

              <Link href={`/blog/${post.slug}`}>
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <section className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.expertContent}
                  </p>

                  <section>
                    <Link
                      href={`/post/${post.slug}`}
                      className="inline-block bg-pink-50 text-rose-600 px-4 py-2 rounded-md text-sm hover:bg-pink-100 transition-colors duration-200"
                    >
                      Read More
                    </Link>
                  </section>

                  {/* Icons Section */}
                  <section className=" mt-2 flex items-center justify-between text-sm text-gray-500">
                    {/* View and Comments */}
                    <section className="flex gap-4 items-center">
                      <span className="flex items-center gap-1">
                        <Visibility className="text-green-500" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <CommentIcon className="text-pink-600" />
                        {post.comments.length}
                      </span>
                    </section>

                    <section>
                      <Favorite className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200" />
                    </section>
                  </section>
                </section>
              </Link>
            </motion.div>
          ))}
      </section>
    </section>
  );
};

export default RecentPost;
