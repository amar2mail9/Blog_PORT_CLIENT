"use client";
import React, { useEffect, useState } from "react";
import LatestPost from "../Page/BlogLandingPage/MainPost/LatestPost";
import TopSection from "./TopSection";

import { VCFormatter } from "@/context/ViewAndCommentsForamter";
import {
  Visibility,
  Comment as CommentIcon,
  Favorite,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import Spinner from "../Spinner";
import { Button } from "@mui/material";

const extractDate = (date) => new Date(date).toLocaleDateString();

const AllBlogList = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
      const data = await res.json();
      setBlogData(data.data);
    } catch (error) {
      console.log("Featured", error.error);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <main className="px-[10%] bg-slate-100 text-gray-800 py-6">
      <section className="w-full flex flex-col md:flex-row gap-6">
        {/* Left Section - Blogs */}
        <div className="w-full">
          {/* <TopSection /> */}
          {blogData.length === 0 ? (
            <Spinner message="Fetching Blog..." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {blogData.map((item, idx) => {
                return (
                  <motion.div
                    key={idx}
                    className="bg-white border rounded-lg my-swiper-slide  hover:shadow-xl  transition-all hover:scale-105  duration-500 ease-in-out"
                  >
                    {/* Top Section */}
                    <section className="flex items-center rounded-t-lg justify-between p-2 bg-white">
                      <div className="flex items-center gap-3">
                        <FaUserCircle className="text-gray-500 w-9 h-9" />
                        <div className="flex flex-col">
                          <h6 className="text-xs font-semibold text-gray-700">
                            {item.author.fullname}
                          </h6>
                          <p className="text-[8px] text-gray-500">
                            {extractDate(item?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <span className="bg-blue-100 text-blue-600 text-[9px] font-medium px-3 py-1 rounded-lg">
                        {item.category.categoryName}
                      </span>
                    </section>

                    <Link href={`/blog/${item.slug}`}>
                      <div className="w-full h-40 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </Link>

                    {/* Content Section */}
                    <section className="p-4">
                      <h2 className="text-md font-semibold mb-2 line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-xs mb-4 line-clamp-3">
                        {item?.expert}
                      </p>

                      <Link href={`/blog/${item.slug}`}>
                        <Button className="block text-center !capitalize !bg-blue-500 !text-white  w-full rounded-md text-[12px] hover:!bg-blue-600 ">
                          Read More
                        </Button>
                      </Link>

                      {/* Icons Section */}
                      <section className="mt-4 flex items-center justify-between text-sm text-gray-500">
                        <div className="flex gap-4 items-center">
                          <span className="flex items-center gap-1">
                            <Visibility className="text-green-500" />
                            {VCFormatter(item.views || 10000)}
                          </span>
                          <span className="flex items-center gap-1">
                            <CommentIcon className="text-blue-600" />
                            {VCFormatter(item?.comments?.length || 0)}
                          </span>
                        </div>
                        <Favorite className="text-red-500 cursor-pointer hover:text-red-600 transition duration-200" />
                      </section>
                    </section>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AllBlogList;
