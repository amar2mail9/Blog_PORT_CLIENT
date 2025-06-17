"use client";
import { blogData } from "@/context/BlogData";
import React, { useEffect, useState } from "react";
import { FcCalendar } from "react-icons/fc";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@mui/material";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
import { categories } from "@/context/Category";
import Link from "next/link";
import { agoTime } from "@/context/TimeFormate";
import Spinner from "@/components/Spinner";
const RecentPosts = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
      const data = await res.json();
      setBlogData(data.data); // ← Make sure the structure matches your API response
    } catch (error) {
      console.error("Failed to fetch blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData(); // ← Call on mount
  }, []);
  return (
    <div className="md:grid md:grid-cols-12 grid-cols-1 flex flex-col  gap-8 w-full h-[80vh bg-red-800] items-start">
      <div className="lg:col-span-9 md:col-span-7 flex flex-col gap-8  ">
        <div className="flex items-center lg:flex-row md:flex-col gap-3">
          <h2 className="md:text-3xl sm:text-xl text-lg font-semibold text-gray-700">
            Recent Post
          </h2>
          <div className="md:w-[300px] sm:w-[200px] w-[100px]    h-[4px] bg-rose-500 rounded-full"></div>
        </div>

        <div className="w-full  lg:flex  gap-4  ">
          {/* section 1 */}
          <div className="w-[450px] h-[400px] rounded-lg lg:block hidden">
            <Swiper
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={2000}
              modules={[Autoplay]}
              className="mySwiper w-full h-full rounded-lg "
            >
              {blogData.length === 0 ? (
                <Spinner />
              ) : (
                blogData.slice(0, 3).map((post, idx) => {
                  return (
                    <SwiperSlide
                      key={idx}
                      className="w-full h-full overflow-hidden my-swiper-slide "
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative w-full h-full">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full hover:scale-110 transition-all ease-in-out duration-1000  brightness-50 object-cover object-center absolute top-0 "
                          />
                          <div className="w-full h-full z-10 text-white absolute">
                            <div className="relative w-full h-full">
                              <div className="absolute bottom-10 p-8 flex flex-col">
                                <span className="flex items-center gap-3">
                                  <Button
                                    variant="contained"
                                    className="!bg-pink-600 !py-1 !text-sm !px-4"
                                  >
                                    {post.category.categoryName.length > 14
                                      ? `${post.category.categoryName.slice(
                                          0,
                                          14
                                        )}...`
                                      : post.category.categoryName}
                                  </Button>
                                  <span className="flex items-center">
                                    <FcCalendar className="w-6 h-6 p-1" />
                                    <span className="text-xs text-gray-300">
                                      {agoTime(post.createdAt)}
                                    </span>
                                  </span>
                                </span>
                                <motion.div
                                  initial={{ opacity: 0, y: 100 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5, duration: 2 }}
                                  viewport={{ once: false }}
                                >
                                  <h1 className="text-xl line-clamp-2">
                                    {post.title}
                                  </h1>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
          </div>

          {/* section 2 */}
          <div className="w-full h-[400px]   scroll-container">
            <Swiper
              centeredSlides={true}
              loop={true}
              direction="vertical"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              transition={{ duration: 5 }}
              modules={[Autoplay]}
              className="w-full mySwiper h-full "
              slidesPerView={3}
              spaceBetween={30}
            >
              {blogData.slice(0, 10).map((blog, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="flex gap-4 p shadow-hover hover:text-pink-500 hover:rounded-lg transition-all ease-in-out duration-500 p-1">
                        <div className="w-[35%] rounded-lg overflow-hidden">
                          <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            className="rounded-lg w-full h-[100px] hover:scale-110 transition-all duration-1000 ease-in-out hover:brightness-50 cursor-pointer object-cover object-center "
                          />
                        </div>
                        <div className="w-[65%] flex flex-col gap-2">
                          <div className="flex gap-2 ">
                            <button className="bg-pink-100 text-pink-500 text-xs px-2 py-1 rounded-md hover:bg-pink-500 hover:text-white duration-1000 ease-in-out transition-all">
                              {blog.category.categoryName.length > 14
                                ? `${blog.category.categoryName.slice(
                                    0,
                                    14
                                  )}...`
                                : blog.category.categoryName}
                            </button>

                            <span className="flex items-center">
                              <FcCalendar className="w-6 h-6 p-1" />
                              <span className="text-xs text-gray-500">
                                {agoTime(blog.createdAt)}
                              </span>
                            </span>
                          </div>
                          {/* title */}
                          <h2 className="text-sm line-clamp-2">{blog.title}</h2>
                        </div>
                      </div>
                    </Link>
                    <hr className="my-4" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="md:col-span-2  flex flex-col gap-8 w-full">
        <div className="flex items-start flex-col w-full">
          <span className="py-2 px-4 rounded-sm bg-rose-100 text-rose-600 font-[500]">
            Categories
          </span>
          <div className="w-full h-[2px] bg-rose-100"></div>
        </div>
        <div className="w-[310px] h-[450px] mx-auto flex flex-col gap-1 ">
          {categories.map((category, idx) => {
            return (
              <div
                key={idx}
                className="w-full flex rounded-md items-center h-[85px] relative"
              >
                <img
                  src={category.image}
                  alt={category.categoryName}
                  className="object-cover object-center rounded-md absolute  brightness-50 w-full h-full "
                />
                <div className="z-10 flex items-center justify-between w-[90%] mx-auto ">
                  <button className=" px-2 text-[12px] text-white py-1 rounded-md bg-[#ffffff4e]">
                    {category.categoryName}
                  </button>
                  <span className=" px-2 text-[12px] text-white py-1 rounded-md bg-[#ffffff4e]">
                    {category.count}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
