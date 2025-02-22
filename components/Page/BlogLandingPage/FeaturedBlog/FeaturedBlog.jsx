"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { blogData } from "@/context/BlogData";
import { CalendarMonth } from "@mui/icons-material";
const FeaturedBlog = () => {
  return (
    <section className="w-full  lg:px-[10%] md:px-[5%] px-10 bg-gray-100 py-8">
      <div className="w-full h-full md:grid md:grid-cols-12">
        <div className="lg:col-span-9 md:grid-cols-7 w-full">
          <div className="md:w-[45%] py-6">
            <div className="flex items-center  gap-4 lg:flex-row md:flex-col flex-row">
              <h2 className="lg:text-2xl md:text-xl text-lg font-semibold ">
                Featured
              </h2>
              <div className="lg:w-[200px] w-[100px] h-[3px] bg-red-500 "></div>
            </div>

            <div className="mt-4 w-full bg-red-600">
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
                    <SwiperSlide key={idex} className="">
                      {/* image section */}
                      <div className="w-full h-[300px]">
                        <img
                          src={post.imageThumbnail}
                          alt={post.title}
                          className="hover:scale-110 duration-[2s] hover:brightness-50 ease-in-out transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-4 p-4">
                        <div className="flex items-center gap-2">
                          <button className="bg-pink-50 text-sm rounded-md text-pink-500 px-6 py-1 hover:bg-pink-500 hover:text-pink-100 duration-500 ease-in-out transition-all shadow-hover">
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
          <div className="w-[65%]"></div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
