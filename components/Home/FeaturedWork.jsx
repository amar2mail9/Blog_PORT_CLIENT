"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FeaturedWork = () => {
  const [work, setWork] = useState([
    {
      id: 1,
      title: "Designing Dashboards",
      year: 2020,
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
    },
    {
      id: 2,
      title: "App UI Design",
      year: 2021,
      description:
        "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
    },
    {
      id: 3,
      title: "UX Research",
      year: 2022,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor et libero.",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
    },
  ]);

  return (
    <section className="w-full bg-pink-50 lg:px-[10%] md:px-[7%] sm:px-[5%] px-6 py-10">
      <div className="flex items-baseline gap-3 bg-pink-100 p-4 rounded-md shadow-sm">
        <h2 className="text-pink-700 text-2xl font-semibold">Featured Works</h2>
        <div className="w-3/12 h-1 bg-pink-500 rounded-full"></div>
      </div>

      <div className="mt-8 flex flex-col gap-10">
        {work.map((item, idx) => (
          <div key={idx}>
            {/* Desktop View */}
            <motion.div
              className="hidden md:block hover:cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <div className="flex gap-6 items-start">
                <div className="w-[30%] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-60 object-cover object-center brightness-90 hover:brightness-75 transition-all duration-300"
                  />
                </div>

                <div className="w-[65%] flex flex-col gap-3">
                  <h2 className="text-3xl text-pink-600 font-bold">{item.title}</h2>
                  <div className="flex items-center gap-6">
                    <span className="rounded-full px-4 py-1 bg-pink-600 text-white text-md">
                      {item.year}
                    </span>
                    <p className="text-lg text-pink-500 font-medium">Portfolio</p>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
              <hr className="mt-6 border-pink-300" />
            </motion.div>

            {/* Mobile View */}
            <motion.div
              className="block md:hidden"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              viewport={{ once: false }}
            >
              <div className="flex flex-col gap-3">
                <div className="rounded-md overflow-hidden shadow-md">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-60 object-cover object-center brightness-95"
                  />
                </div>

                <h2 className="text-xl font-semibold text-pink-600">{item.title}</h2>
                <div className="flex items-center gap-6">
                  <span className="rounded-full px-3 py-1 bg-pink-500 text-white text-sm">
                    {item.year}
                  </span>
                  <p className="text-sm text-pink-500">Portfolio</p>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
              <hr className="mt-4 border-pink-300" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;
