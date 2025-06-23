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
  FaBriefcase,
  FaTools,
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

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-6xl mx-auto mt-20 px-4"
      >
        <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg">
          <div className="text-blue-500 text-5xl mb-4">
            <FaBriefcase />
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Work Experience
          </h3>
          <ul className="space-y-6 text-gray-700">
            <li>
              <strong>Customer Support Executive</strong> – NSB BPO Services
              Pvt. Ltd., Noida (Mar 2025 – Jun 2025)
              <ul className="list-disc ml-6 mt-1">
                <li>
                  Handled customer queries and provided technical support via
                  calls and emails.
                </li>
                <li>
                  Worked with internal teams to resolve issues and deliver
                  customer satisfaction.
                </li>
              </ul>
            </li>
            <li>
              <strong>Teaching Assistant</strong> – Sr. Infinity School, Noida
              (Mar 2023 – Nov 2024)
              <ul className="list-disc ml-6 mt-1">
                <li>
                  Assisted in teaching Math and Computer Science to school
                  students.
                </li>
                <li>
                  Created lesson plans, digital content, and conducted
                  interactive classroom sessions.
                </li>
              </ul>
            </li>
            <li>
              <strong>Video Editor</strong> – Digital Polytechnic Classes,
              Online (Mar 2021 – Feb 2022)
              <ul className="list-disc ml-6 mt-1">
                <li>
                  Edited lecture and tutorial videos for YouTube and internal
                  learning platforms.
                </li>
                <li>
                  Used Canva and other tools to enhance visuals, add
                  transitions, and optimize for engagement.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="max-w-6xl mx-auto mt-16 px-4"
      >
        <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-lg">
          <div className="text-blue-500 text-5xl mb-4">
            <FaTools />
          </div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div>
              <strong>Frontend:</strong> HTML/HTML5, CSS/CSS3, Tailwind CSS,
              Bootstrap, Material UI, JavaScript, React.js, Next.js, Responsive
              UI
            </div>
            <div>
              <strong>Backend:</strong> Node.js, Express.js, Authentication
            </div>
            <div>
              <strong>Database:</strong> MongoDB
            </div>
            <div>
              <strong>Version Control:</strong> Git, GitHub
            </div>
            <div>
              <strong>MS Office:</strong> PowerPoint, Word, Excel, Outlook
            </div>
            <div>
              <strong>Video Editing:</strong> Canva, Adobe Photoshop, Premiere
              Pro, Power Director
            </div>
            <div>
              <strong>E-Commerce:</strong> Product Listing, Pricing,
              Marketplaces, Storage, Multichannel Marketing
            </div>
          </div>
        </div>
      </motion.div>

      <ContactUs/>
    </div>
  );
}
