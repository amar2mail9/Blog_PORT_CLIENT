"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { blogData } from "@/context/BlogData";
import {
  CalendarMonth,
  Favorite,
  HeartBrokenRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa"; // For social media icons

// icons
const socialIcon = [
  {
    icon: <FaFacebookF className="w-full h-full text-blue-600" />, // Facebook Icon with color
    likes: 15000,
  },
  {
    icon: <FaTwitter className="w-full h-full text-blue-400" />, // Twitter Icon with color
    likes: 12000,
  },
  {
    icon: <FaYoutube className="w-full h-full text-red-600" />, // YouTube Icon with color
    likes: 20000,
  },
  {
    icon: <FaInstagram className="w-full h-full text-pink-500" />, // Instagram Icon with color
    likes: 18000,
  },
  {
    icon: <FaLinkedinIn className="w-full h-full text-blue-700" />, // LinkedIn Icon with color
    likes: 8000,
  },
  {
    icon: <FaPinterestP className="w-full h-full text-red-600" />, // Pinterest Icon with color
    likes: 9500,
  },
];

const FeaturedBlog = () => {
  return (
    <section className="w-full  lg:px-[6%] md:px-[3%]  bg-gray-100 py-8 px-5 ">
      <div className="w-full h-full md:grid md:grid-cols-12 ">
        <div className="lg:col-span-9 md:grid-cols-7 w-full flex  items-center">
          {/* section 01 */}
          <div className="md:w-[45%] py-6 w-full md:block hidden">
            <div className="flex items-center  gap-4 lg:flex-row md:flex-col flex-row">
              <h2 className="lg:text-2xl md:text-xl text-lg font-semibold ">
                Featured
              </h2>
              <div className="lg:w-[200px] w-[100px] h-[3px] bg-red-500 "></div>
            </div>

            <div className="mt-4 w-full ">
              <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={2000}
                transition={{ duration: 5 }}
                modules={[Autoplay]}
                className="mySwiper w-full h-full rounded-lg  bg-white shadow-hover ease-in-out duration-300 transition-all "
              >
                {blogData.map((post, idex) => {
                  return (
                    <SwiperSlide key={idex} className=" w-full h-full">
                      {/* image section */}
                      <div className="w-full md:h-[300px] h-[220px]">
                        <img
                          src={post.imageThumbnail}
                          alt={post.title}
                          className="hover:scale-110 w-full h-full duration-[2s] hover:brightness-50 ease-in-out transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <button className="bg-pink-50 text-sm rounded-md text-pink-500 md:px-6 px-3 py-1 hover:bg-pink-500 hover:text-pink-100 duration-500 ease-in-out transition-all shadow-hover line-clamp-1">
                            {post.category}
                          </button>
                          <span className="flex items-center gap-2 text-sm text-gray-600">
                            <CalendarMonth /> {post.publishDate}
                          </span>
                        </div>

                        <h2 className="md:text-xl lg   line-clamp-2 font-semibold">
                          {post.title}
                        </h2>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* section -2 */}
          <div className="lg:w-[65%] w-full   p-2 lg:flex flex-col  ">
            {blogData.map((post, idx) => {
              return (
                <motion.div
                  key={idx}
                  className=" w-full h-44 my-swiper-slide mb-6 rounded-lg  overflow-hidden "
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    scale: { type: "spring", bounce: 0.5, stiffness: 100 },
                  }}
                  viewport={{ once: false }}
                >
                  <div className="w-full rounded-lg mx-auto relative h-full  object-fit">
                    <img
                      src={post.imageThumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover ease-in-out duration-1000 object-center rounded-lg brightness-50 absolute "
                    />

                    <div className="absolute bottom-0  p-4">
                      <div className="flex gap-2 ">
                        <button className="bg-pink-100 text-pink-500 text-xs px-2 py-1 rounded-md hover:bg-pink-500 hover:text-white duration-1000 ease-in-out transition-all">
                          {post.category.length > 14
                            ? `${post.category.slice(0, 14)}...`
                            : post.category}
                        </button>

                        <span className="flex items-center">
                          <FcCalendar className="w-6 h-6 p-1" />
                          <span className="text-xs text-gray-200">
                            {post.publishDate}
                          </span>
                        </span>
                      </div>

                      <h2 className="md:text-2xl sm:text-xl line-clamp-2  text-lg text-white">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="col-span-3 ml-8">
          <div className="w-full flex flex-col mb-6">
            <span className="bg-white text-pink-600 px-3 py-2 w-fit">
              Social Feed
            </span>
            <div className="w-full h-[1px] bg-white"></div>
          </div>

          {/* icons */}
          <div className="flex flex-col gap-3">
            {" "}
            {socialIcon.map((icon, idx) => {
              return (
                <motion.div className="w-[95%] mx-auto p-2 bg-white shadow-hover duration-500 ease-in-out transition-all rounded-lg">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
