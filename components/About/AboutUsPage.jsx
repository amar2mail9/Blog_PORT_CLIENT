"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaLightbulb, FaRocket, FaCode } from "react-icons/fa"; // Import icons
import ContactUs from "./ContactUs";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          About Polytechub
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Your hub for insightful tech blogs, comprehensive tutorials, and
          inspiring portfolio showcases. We're passionate about empowering
          developers and tech enthusiasts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-3xl shadow-xl overflow-hidden"
        >
          <SwiperSlide>
            <div className="p-8 md:p-12 bg-white rounded-3xl flex flex-col items-center shadow-lg transition-all hover:scale-105">
              <FaLightbulb className="text-4xl md:text-6xl text-blue-500 mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-gray-600 text-center md:text-lg">
                Empowering developers and tech enthusiasts by sharing valuable
                knowledge and innovative ideas.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-8 md:p-12 bg-white rounded-3xl flex flex-col items-center shadow-lg transition-all hover:scale-105">
              <FaRocket className="text-4xl md:text-6xl text-green-500 mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 text-center md:text-lg">
                To become a leading platform for high-quality tech content and
                showcasing real-world projects.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-8 md:p-12 bg-white rounded-3xl flex flex-col items-center shadow-lg transition-all hover:scale-105">
              <FaCode className="text-4xl md:text-6xl text-purple-500 mb-6" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                What We Offer
              </h2>
              <p className="text-gray-600 text-center md:text-lg">
                Comprehensive blogs, detailed tutorials, and inspiring project
                showcases to help you grow in your tech journey.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <ContactUs />
    </div>
  );
}
