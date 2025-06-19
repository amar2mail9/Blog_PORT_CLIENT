"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// import { blogData } from "@/context/BlogData";
import { CalendarMonth, Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { agoTime } from "@/context/TimeFormate";
import Spinner from "@/components/Spinner";

const socialIcon = [
  {
    icon: <FaFacebookF className="w-full h-full text-blue-600" />,
    likes: 15000,
  },
  { icon: <FaTwitter className="w-full h-full text-blue-400" />, likes: 12000 },
  { icon: <FaYoutube className="w-full h-full text-red-600" />, likes: 20000 },
  {
    icon: <FaInstagram className="w-full h-full text-pink-500" />,
    likes: 18000,
  },
  {
    icon: <FaLinkedinIn className="w-full h-full text-blue-700" />,
    likes: 8000,
  },
  {
    icon: <FaPinterestP className="w-full h-full text-red-600" />,
    likes: 9500,
  },
];

const FeaturedBlog = () => {
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
    <section className="w-full bg-gray-100 py-8 px-5 md:px-8 lg:px-[6%]">
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row">
          <div className="w-full md:w-[45%] py-6">
            <div className="flex items-center gap-4">
              <h2 className="lg:text-2xl md:text-xl text-lg font-semibold">
                Featured
              </h2>
              <div className="lg:w-[200px] w-[100px] h-[3px] bg-red-500"></div>
            </div>
            <div className="mt-4 w-full">
              {blogData.length === 0 ? (
                <Spinner />
              ) : (
                <Swiper
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  speed={2000}
                  modules={[Autoplay]}
                  className="mySwiper w-full h-full rounded-lg bg-white shadow-hover"
                >
                  {blogData.map((post, idex) => (
                    <SwiperSlide key={idex} className="w-full h-full">
                      <Link href={`/blog/${post.slug}`}>
                        <div className="w-full md:h-[300px] h-[220px]">
                          <img
                            src={post?.thumbnail}
                            alt={post?.title}
                            loading="lazy"
                            className="hover:scale-110 transform-gpu w-full h-full duration-[2s] hover:brightness-50 transition-all object-cover"
                          />
                        </div>
                        <div className="flex flex-col items-start gap-4 p-4">
                          <div className="flex items-center gap-2">
                            <button className="bg-pink-50 text-sm rounded-md text-pink-500 md:px-6 px-3 py-1 hover:bg-pink-500 hover:text-pink-100 duration-500 ease-in-out transition-all shadow-hover line-clamp-1">
                              {post.category.categoryName}
                            </button>
                            <span className="flex items-center gap-2 text-sm text-gray-600">
                              <CalendarMonth /> {agoTime(post?.createdAt)}
                            </span>
                          </div>
                          <h2 className="md:text-xl lg line-clamp-2 font-semibold">
                            {post?.title}
                          </h2>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="w-full md:w-[55%] lg:w-[70%] h-[600px] p-2 lg:flex flex-col">
            <Swiper
              centeredSlides={true}
              loop={true}
              direction="vertical"
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              speed={1500}
              modules={[Autoplay]}
              className="w-full mySwiper h-full"
              slidesPerView={3}
              breakpoints={{
                768: { slidesPerView: 2 },
                640: { slidesPerView: 1 },
              }}
            >
              {blogData.map((post, idx) => (
                <SwiperSlide key={idx}>
                  <Link href={`/blog/${post?.slug}`}>
                    <motion.div
                      className="w-full sm:h-60 h-44 my-swiper-slide mb-6 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        scale: { type: "spring", bounce: 0.5, stiffness: 100 },
                      }}
                      viewport={{ once: false }}
                    >
                      <div className="w-full rounded-lg mx-auto relative h-full object-fit">
                        <img
                          src={post?.thumbnail}
                          alt={post?.title}
                          className="w-full h-full object-cover ease-in-out duration-1000 object-center rounded-lg brightness-50 absolute"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 p-4">
                          <div className="flex gap-2">
                            <button className="bg-pink-100 text-pink-500 text-xs px-2 py-1 rounded-md hover:bg-pink-500 hover:text-white duration-1000 ease-in-out transition-all">
                              {post.category.categoryName.length > 14
                                ? `${post.category.categoryName.slice(
                                    0,
                                    14
                                  )}...`
                                : post.category.categoryName}
                            </button>
                            <span className="flex items-center">
                              <FcCalendar className="w-6 h-6 p-1" />
                              <span className="text-xs text-gray-200">
                                {agoTime(post.createdAt)}
                              </span>
                            </span>
                          </div>
                          <h2 className="md:text-2xl sm:text-xl line-clamp-2 text-lg text-white">
                            {post.title}
                          </h2>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 md:ml-4 lg:ml-8">
          <div className="w-full flex flex-col mb-6">
            <span className="bg-white text-pink-600 px-3 py-2 w-fit">
              Social Feed
            </span>
            <div className="w-full h-[1px] bg-white"></div>
          </div>
          <div className="flex flex-col gap-3">
            {socialIcon.map((icon, idx) => (
              <motion.div
                key={idx}
                className="w-[95%] mx-auto p-2 bg-white shadow-hover duration-500 ease-in-out transition-all rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <span className="w-10 h-10 p-1">{icon.icon}</span>
                    <p className="text-xs">{icon.likes} Likes</p>
                  </div>
                  <button className="text-sm p-1">
                    <Favorite />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
