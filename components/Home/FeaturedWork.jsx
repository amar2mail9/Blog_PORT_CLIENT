"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  const [work, setWork] = useState([
    {
      id: 1,
      title: "Portfolio & Blog",
      Link: "https://polytechub.vercel.app",
      description:
        "A personal portfolio and blog where I showcase projects, share knowledge, and experiment with the latest tech.",
      thumbnail: "./featurework/pandb.png",
      techstack: [
        "React",
        "Tailwind",
        "Node.js",
        "Next JS",
        "Swiper JS",
        "Motion Framer",
        "MongoDB",
        "JWT",
        "Express JS",
        "Vercel",
        "Frontend",
        "Backend",
      ],
    },
    {
      id: 2,
      title: "E-Commerce",
      link: "https://a-storeamar.netlify.app",
      description:
        "A complete e-commerce frontend with responsive UI, product filtering, and intuitive cart experience.",
      thumbnail: "./featurework/ecom.png",
      techstack: ["React", , "Tailwind", "Swiper JS", "Netlify"],
    },
    {
      id: 3,
      title: "Flipkart Landing Page",
      link: "https://flipcartclonebyamar.netlify.app/",
      description:
        "A modern and responsive clone of Flipkart’s homepage using HTML, CSS, and React for layout precision.",
      thumbnail: "./featurework/flipkart.png",
      techstack: ["React", "Tailwind CSS", "Swiper JS"],
    },
    {
      id: 4,
      title: "Blog Website",
      link: "https://amartsblog.netlify.app/",
      description:
        "A clean and minimalist blog platform where users can explore topics and stay updated with tech content.",
      thumbnail: "./featurework/blog.png",
      techstack: ["React", "Swiper JS", "Tailwind", "Fake Blog API"],
    },
  ]);

  return (
    <section className="w-full bg-gray-100 lg:px-[10%] md:px-[7%] sm:px-[5%] px-6 py-12">
      <div className="flex items-baseline gap-3 bg-white p-4 rounded-md shadow-md border border-blue-200">
        <h2 className="text-sky-600 text-2xl font-semibold">Featured Works</h2>
        <div className="w-3/12 h-1 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {work.map((item, idx) => (
          <div key={idx}>
            {/* Desktop View */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="flex gap-6 items-start bg-white shadow-lg border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all">
                <div className="w-[30%] rounded-sm overflow-hidden">
                  <img
                  loading="lazy"
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-60 object-cover object-center brightness-90 hover:brightness-75 transition duration-300"
                  />
                </div>

                <div className="w-[65%] flex flex-col gap-3">
                  <h2 className="text-3xl text-sky-700 font-bold">
                    {item.title}
                  </h2>
                  <p className="text-gray-700">{item.description}</p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.techstack?.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <a
                      href={item.link || item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mobile View */}
            <motion.div
              className="block md:hidden"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="flex flex-col gap-4 bg-white shadow-lg border border-gray-200 rounded-xl p-4">
                <div className="rounded-md overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-60 object-cover object-center brightness-95"
                  />
                </div>

                <h2 className="text-xl font-bold text-sky-700">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {item.techstack?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <a
                    href={item.link || item.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
