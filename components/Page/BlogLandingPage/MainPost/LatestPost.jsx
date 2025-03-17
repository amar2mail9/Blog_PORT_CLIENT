import { blogData } from "@/context/BlogData";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
import { FcCalendar } from "react-icons/fc";
import Link from "next/link";
const LatestPost = () => {
  return (
    <div className="my-5">
      <div>
        <h3 className="text-lg bg-gray-800 text-pink-600 py-2 px-6 rounded-t-lg w-fit">
          Latest Post{" "}
        </h3>
        <div className="w-full bg-gray-700 h-1 rounded-full"></div>
      </div>

      <div className="mt-6 w-full h-[700px] ">
        <div className="w-full h-full scroll-container">
          <Swiper
            centeredSlides={true}
            loop={true}
            direction="vertical"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1500}
            modules={[Autoplay]}
            className="w-full mySwiper h-full "
            slidesPerView={7}
          >
            {blogData
              .slice(-10)
              .reverse()
              .map((post, idx) => {
                return (
                  <SwiperSlide
                    key={idx}
                    className="  mb-3 px-2 rounded-lg  my-swiper-slide overflow-hidden  bg-gray-800 "
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="w-full h-full overflow-hidden rounded-lg">
                        <div className="w-full h-full flex items-start gap-3">
                          <div className="w-[30%] h-[100%] py-2">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full hover:brightness-75 transition-all ease-in-out duration-1000 object-cover object-center rounded-sm"
                            />
                          </div>

                          <div className="w-[70%] h-full ">
                            <div className="flex flex-col gap-3 items-start my-3">
                              <div className="flex gap-2 items-center">
                                <button className="px-2 py-1 rounded-full text-[10px] bg-slate-700 text-pink-600 ">
                                  {post.category.length > 12
                                    ? `${post.category.slice(0, 12)}...`
                                    : post.category}
                                </button>
                                <span className="flex items-center">
                                  <FcCalendar className="w-6 h-6 p-1" />
                                  <span className="text-[10px] text-gray-200">
                                    {post.publishDate}
                                  </span>
                                </span>
                              </div>
                              <h3 className="text-[12px] line-clamp-2  text-gray-400">
                                {post.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
