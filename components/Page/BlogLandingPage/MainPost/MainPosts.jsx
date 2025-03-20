"use client";
import React, { useState } from "react";
import LatestPost from "./LatestPost";
import { motion } from "framer-motion";
import { blogData } from "@/context/BlogData";

import { Button } from "@mui/material";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { Favorite, Visibility } from "@mui/icons-material";
import { extractDate } from "@/context/TimeFormate";
import CommentIcon from "@mui/icons-material/Comment";
import { VCFormatter } from "@/context/ViewAndCommentsForamter";

const MainPosts = () => {
  const [count, setCount] = useState(6);

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
    <section className="flex md:flex lg:flex-row flex-col gap-6 justify-between lg:px-[5%] md:px-[8%] sm:px-[5%] p-5 bg-slate-400/20">
      <div className="lg:w-[75%] w-full">
        <div className="my-4 mb-8">
          <h1 className="lg:text-3xl font-semibold md:text-xl text-lg">
            Main Blog
          </h1>
          <div className="h-1 w-full bg-pink-500 rounded-md my-1"></div>
        </div>
        <div className="w-full gap-8 grid lg:grid-cols-3 md:grid-cols-2">
          {blogData.slice(0, count).map((post, idx) => {
            return (
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
                  <span className="bg-pink-50 border border-pink-500 text-pink-500 rounded-md px-4 py-1">
                    {post.category}
                  </span>
                </section>

                <Link href={`/blog/${post.slug}`}>
                  {/* Image Section */}
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>{" "}
                </Link>

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
                  <section className=" mt-2  flex items-center justify-between text-sm text-gray-500">
                    {/* View and Comments */}
                    <section className="flex gap-4 items-center">
                      <span className="flex items-center gap-1">
                        <Visibility className="text-green-500" />
                        {VCFormatter(post.views)}
                      </span>
                      <span className="flex items-center gap-1">
                        <CommentIcon className="text-pink-600" />
                        {VCFormatter(post.comments.length)}
                      </span>
                    </section>

                    <section>
                      <Favorite className="text-red-500 cursor-pointer hover:text-red-600 transition-colors duration-200" />
                    </section>
                  </section>
                </section>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-7">
          <Button
            onClick={() => {
              setCount((prev) => prev + 6);
            }}
            className="!bg-pink-600 !text-white hover:!bg-pink-700 duration-300"
          >
            View More
          </Button>
        </div>
      </div>

      {/* Latest Post */}
      <div className="lg:w-[25%] w-full">
        <LatestPost />
      </div>
    </section>
  );
};

export default MainPosts;
