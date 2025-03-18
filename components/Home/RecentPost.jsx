"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { blogData } from "@/context/BlogData";
import { BiSolidMessageRounded } from "react-icons/bi";
import CommentIcon from "@mui/icons-material/Comment";

import Link from "next/link";
import { agoTime, extractDate } from "@/context/TimeFormate";

import { FaEye, FaHeart, FaUserCircle } from "react-icons/fa";
import { Favorite, Visibility } from "@mui/icons-material";

const RecentPost = () => {
  return (
    <section className="w-full py-8 bg-cyan-50 lg:px-[10%] md:px-[7%] sm:px-[5%] px-10">
      <div className="flex items-baseline gap-2">
        <h2 className="text-xl font-semibold text-gray-800">Recent Posts</h2>
        <div className="w-4/12 h-1 bg-pink-500 rounded-full "></div>
      </div>

      <section className="flex flex-wrap gap-10">
        {blogData
          .slice(-3)
          .reverse()
          .map((post, idx) => {
            return (
              <motion.div
                key={idx}
                className="w-[360px]  bg-white shadow-md rounded-md my-swiper-slide"
              >
                {/* top section */}{" "}
                <section className="flex items-center justify-between px-4 py-2 bg-gray-100">
                  <div className="flex items-center  gap-3">
                    <span className="w-10 h-10 text-gray-500">
                      <FaUserCircle className="w-full h-full" />
                    </span>
                    <div className="w-full flex flex-col">
                      <h6 className="text-[0.8rem] text-gray-600">
                        <strong>{post.author.name}</strong>
                      </h6>
                      <p className="text-[0.7rem] text-gray-500">
                        {extractDate(post.publishedAt)}
                      </p>
                    </div>
                  </div>
                </section>
                <Link href={`/blog/${post.slug}`}>
                  {/* image section */}
                  <div className="w-full h-44 overflow-hidden ">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover object-center transition-all ease-in-out duration-500 "
                    />
                  </div>
                  {/* content section */}
                  <section>
                    <h2 className="text-[1rem] line-clamp-2">{post.title}</h2>
                    <p className="text-gray-500 line-clamp-3 text-[0.8rem]">
                      {post.expertContent}
                    </p>
                  </section>
                  <section className="">
                    <Link href={`/post/${post.slug}`}>
                      <Button className="!capitalize !bg-pink-50 !text-rose-600">
                        Read More
                      </Button>
                    </Link>
                  </section>
                </Link>
                {/* icons */}
                <section className="px-4 py-2 flex items-center justify-between">
                  {/* view  and comments*/}
                  <section className="flex  gap-4 items-center ">
                    <span className="flex items-center text-gray-500 gap-1">
                      <Visibility className=" text-green-500" />
                      {post.views}
                    </span>
                    <span className="flex items-center text-gray-500 gap-1">
                      <CommentIcon className=" text-pink-600" />
                      {post.comments.length}
                    </span>
                  </section>

                  <section>
                    <span>
                      <Favorite className="text-red-500" />
                    </span>
                  </section>
                </section>
              </motion.div>
            );
          })}
      </section>
    </section>
  );
};

export default RecentPost;
