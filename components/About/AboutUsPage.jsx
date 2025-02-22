"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Polytechub, your go-to destination for tech blogs,
          tutorials, and portfolio showcases.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Empowering developers and tech enthusiasts by sharing knowledge
                and innovative ideas.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become a leading platform for quality tech content and
                real-world project showcases.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-8 bg-white rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
              <p className="text-gray-600">
                From blogs and tutorials to project showcases, we help you grow
                in your tech journey.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}
