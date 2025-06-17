"use client";
import React from "react";
import LatestPost from "../Page/BlogLandingPage/MainPost/LatestPost";
import TopSection from "./TopSection";
import { blogData } from "@/context/BlogData";
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

const extractDate = (date) => new Date(date).toLocaleDateString();

const AllBlogList = () => {
  // const [blogData, setBlogData] = useState([]);

  return (
    <main className="px-[10%] bg-gray-50 text-gray-800 py-6">
      <section className="w-full flex flex-col md:flex-row gap-6">
        {/* Left Section - Blogs */}
        <div className="w-full">
          <TopSection />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {blogData.map((item, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="bg-white border my-swiper-slide  rounded-xl shadow-md transform transition duration-300 "
                >
                  {/* Top Section */}
                  <section className="flex items-center justify-between p-4 bg-gray-100">
                    <div className="flex items-center gap-3">
                      <FaUserCircle className="text-gray-500 w-10 h-10" />
                      <div className="flex flex-col">
                        <h6 className="text-sm font-semibold text-gray-700">
                          {item.author.name}
                        </h6>
                        <p className="text-xs text-gray-500">
                          {extractDate(item.publishedAt)}
                        </p>
                      </div>
                    </div>
                    <span className="bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-lg">
                      {item.category}
                    </span>
                  </section>

                  <Link href={`/blog/${item.slug}`}>
                    <div className="w-full h-40 overflow-hidden">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </Link>

                  {/* Content Section */}
                  <section className="p-4">
                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerptContent || item.expertContent}
                    </p>

                    <Link
                      href={`/blog/${item.slug}`}
                      className="block text-center bg-rose-500 text-white px-4 py-2 rounded-md text-[12px] hover:bg-rose-600 transition"
                    >
                      Read More
                    </Link>

                    {/* Icons Section */}
                    <section className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1">
                          <Visibility className="text-green-500" />
                          {VCFormatter(item.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <CommentIcon className="text-pink-600" />
                          {VCFormatter(item.comments.length)}
                        </span>
                      </div>
                      <Favorite className="text-red-500 cursor-pointer hover:text-red-600 transition duration-200" />
                    </section>
                  </section>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllBlogList;
