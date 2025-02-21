"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import { Button } from "@mui/material";
import { CalendarMonth } from "@mui/icons-material";

const SwiperBlog = () => {
  const blogData = [
    {
      title: "Mastering JavaScript: Tips and Tricks",
      description:
        "A comprehensive guide to becoming a JavaScript expert, covering advanced concepts and best practices.",
      expertAuthor: {
        name: "John Doe",
        bio: "John is a seasoned JavaScript developer with over 10 years of experience in building scalable web applications.",
        socialLinks: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
        avatar:
          "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      },
      category: "Programming",
      imageThumbnail:
        "https://c0.wallpaperflare.com/preview/304/131/640/beverage-blog-blogger-browsing.jpg",
      publishDate: "2025-02-21",
    },
    {
      title: "The Future of AI in Everyday Life",
      description:
        "Exploring how artificial intelligence is reshaping industries and what to expect in the coming years.",
      expertAuthor: {
        name: "Jane Smith",
        bio: "Jane is an AI researcher passionate about machine learning and its impact on modern technology.",
        socialLinks: {
          twitter: "https://twitter.com/janesmith",
          linkedin: "https://linkedin.com/in/janesmith",
        },
        avatar:
          "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      },
      category: "Artificial Intelligence",
      imageThumbnail:
        "https://c0.wallpaperflare.com/preview/304/131/640/beverage-blog-blogger-browsing.jpg",
      publishDate: "2025-02-18",
    },
    {
      title: "Top 10 MongoDB Optimization Techniques",
      description:
        "Speed up your database queries and improve performance with these essential MongoDB tips.",
      expertAuthor: {
        name: "Michael Brown",
        bio: "Michael is a database engineer specializing in NoSQL databases and performance tuning.",
        socialLinks: {
          twitter: "https://twitter.com/michaelbrown",
          linkedin: "https://linkedin.com/in/michaelbrown",
        },
        avatar:
          "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      },
      category: "Database",
      imageThumbnail:
        "https://c0.wallpaperflare.com/preview/304/131/640/beverage-blog-blogger-browsing.jpg",
      publishDate: "2025-02-15",
    },
  ];

  return (
    <section className="relative mb-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full md:h-[85vh] h-[70vh]"
      >
        {blogData.map((post, idx) => {
          return (
            <SwiperSlide key={idx} className="w-full">
              <div className="w-full h-full">
                <div className="relative w-full h-full">
                  <img
                    src={post.imageThumbnail}
                    alt=""
                    className="w-full h-full  object-cover object-center"
                  />
                  <div className="absolute  top-0 bg-[#121212b0] w-full h-full">
                    <div className="relative w-full h-full">
                      <div className="absolute w-full h-full ">
                        <div className="w-full h-full flex items-center justify-between">
                          <div className=" lg:w-[50%] w-full h-full    text-white">
                            <div className="flex w-full h-full gap-6 p-16 flex-col lg:justify-center">
                              <div className="flex md:gap-10 gap-2  lg:items-center">
                                <button className="!bg-rose-600 line-clamp-1 !text-white md:px-6 px-4 lg:text-lg text-xs md:text-sm py-1 rounded-md">
                                  {post.category.length > 16
                                    ? `${post.category.slice(0, 16)}...`
                                    : post.category}
                                </button>
                                <span className="text-gray-500 md:text-xl text-xs ">
                                  <CalendarMonth /> {post.publishDate}
                                </span>
                              </div>
                              <div>
                                <h1 className="md:line-clamp-2 lg:text-5xl md:text-3xl text-xl font-bold">
                                  {post.title}
                                </h1>
                              </div>
                              <div className="flex items-center md:gap-8 gap-3">
                                <img
                                  src={post.expertAuthor.avatar}
                                  alt=""
                                  className="w-14 h-14 rounded-full"
                                />
                                <span className="text-lg">
                                  {" "}
                                  <span className="text-gray-500 ">
                                    By:
                                  </span>{" "}
                                  {post.expertAuthor.name}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="lg:w-[50%] lg:block hidden h-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-0 z-50 md:right-24 w-full md:w-[65%] lg:rounded-t-lg  py-4 px-2 bg-white text-gray-900">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {blogData.map((post, idx) => {
            return (
              <SwiperSlide key={idx} className="w-full  h-full ">
                <div className="flex w-[80%] items-center ">
                  <div className="w-[50%] h-full rounded-lg">
                    <img
                      src={post.imageThumbnail}
                      alt={post.title}
                      className="w-full zoom-image cursor-pointer aspect-square object-cover object-center p-2 rounded-[1rem]"
                    />
                  </div>
                  <div className="w-full">
                    <span className="text-gray-500 ">
                      <CalendarMonth /> {post.publishDate}
                    </span>
                    <h2 className="text-[16px] text-gray-900 font-semibold ">
                      {post.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperBlog;
