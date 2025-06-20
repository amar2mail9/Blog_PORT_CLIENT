"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  FaLightbulb,
  FaRocket,
  FaCode,
  FaUserGraduate,
  FaLaptopCode,
} from "react-icons/fa";
import ContactUs from "./ContactUs";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          About <span className="text-blue-600">Polytechub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Explore our mission, vision, and the journey of building a
          developer-focused community.
        </p>
      </motion.div>

      {/* Core Swiper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-3xl"
        >
          {[
            {
              icon: <FaLightbulb />,
              title: "Our Mission",
              content:
                "Empowering developers and tech enthusiasts by sharing valuable knowledge and innovative ideas.",
            },
            {
              icon: <FaRocket />,
              title: "Our Vision",
              content:
                "To become a leading platform for high-quality tech content and showcasing real-world projects.",
            },
            {
              icon: <FaCode />,
              title: "What We Offer",
              content:
                "Comprehensive blogs, detailed tutorials, and inspiring project showcases to help you grow in your tech journey.",
            },
          ].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-10 md:p-14 bg-white/60 backdrop-blur-md rounded-3xl shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 text-center">
                <div className="text-5xl text-blue-600 mb-6 animate-pulse">
                  {item.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
                  {item.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Creator Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4"
      >
        <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="text-blue-500 text-5xl mb-4">
            <FaUserGraduate />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            Meet the Creator
          </h3>
          <p className="text-gray-700">
            I'm <strong>Amar Kumar</strong>, a MERN Stack Developer and BCA
            student. I created Polytechub to share my learning journey while
            managing work at NSB BPO. My mission is to inspire and guide others
            in the tech world.
          </p>
        </div>

        <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="text-blue-500 text-5xl mb-4">
            <FaLaptopCode />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">
            Why I Built Polytechub
          </h3>
          <p className="text-gray-700">
            As a self-learner, I understand the struggles of growing in tech.
            Polytechub is my way of giving back — offering blogs, tutorials, and
            projects to uplift fellow developers and learners.
          </p>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="mt-20">
        <ContactUs />
      </div>
    </div>
  );
}
