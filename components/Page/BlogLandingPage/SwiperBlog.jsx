"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";

import { CalendarMonth } from "@mui/icons-material";
import { blogData } from "@/context/BlogData";

import Link from "next/link";

const SwiperBlog = () => {
  return (
    <section className="relative mb-8">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-[100%] md:h-[85vh] h-[50vh]"
      >
        {blogData.slice(0, 4).map((post, idx) => {
          return (
            <SwiperSlide key={idx} className="w-[100%] h-full  ">
              <Link href={`/blog/${post.slug}`}>
                <div className=" relative w-full h-full overflow-hidden cursor-pointer my-swiper-slide">
                  <img
                    src={post?.featuredImage}
                    alt=""
                    className="w-full h-full object-cover zoom-image  object-center brightness-50 absolute top-0 left-0 -z-10"
                  />
                  <div className=" w-full h-full    ">
                    <div className="w-full h-full flex items-center justify-between">
                      <div className=" lg:w-[50%] w-full h-full    text-white">
                        <div className="flex w-full h-full gap-6 lg:p-16 p-8 flex-col lg:justify-center">
                          <div className="flex md:gap-10 gap-2  lg:items-center">
                            <button className="!bg-rose-600 line-clamp-1 !text-white md:px-6 px-4 lg:text-lg text-xs md:text-sm py-1 rounded-md">
                              {post.category}
                            </button>
                            <span className="text-gray-300 md:text-xl text-xs ">
                              <CalendarMonth /> {post.publishedAt}
                            </span>
                          </div>
                          <div>
                            <h1 className="md:line-clamp-2 lg:text-5xl md:text-3xl text-xl font-bold">
                              {post.title}
                            </h1>
                          </div>
                          <div className="flex items-center md:gap-8 gap-3">
                            <img
                              src={
                                post?.expertAuthor?.avatar ||
                                "https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                              }
                              alt=""
                              className="w-14 h-14 rounded-full"
                            />
                            <span className="text-lg">
                              <span className="text-gray-300 ">By:</span>{" "}
                              {post.author.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[50%] lg:block hidden h-full"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-0 z-10 md:right-24 w-full md:w-[65%] lg:rounded-t-lg  py-4 px-2 bg-white text-gray-900">
        <Swiper
          slidesPerView={1}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={2000}
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
          {blogData.slice(0, 3).map((post, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="w-full  h-full my-swiper-slide cursor-pointer  "
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex  items-center ">
                    {/* section 01 */}
                    <div className="w-[200px] overflow-hidden h-[150px] rounded-lg  ">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className=" zoom-image h-full w-full cursor-pointer  object-cover object-center  rounded-lg"
                      />
                    </div>

                    {/* section 2 */}
                    <div className="w-full">
                      <span className="text-gray-500 ">
                        <CalendarMonth /> {post.publishDate}
                      </span>
                      <h2 className="text-[16px] text-gray-900 font-semibold ">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperBlog;
