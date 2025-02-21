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
    <section className="w-full bg-white lg:px-[10%] md:px-[7%] sm:px-[5%] px-10 py-8 ">
      <h2 className="mb-7 text-gray-700 text-2xl font-[500]">Featured Works</h2>

      <div className="mt-6 flex flex-col gap-8">
        {work.map((item, idx) => {
          return (
            <div key={idx}>
              {/* large screen */}
              <motion.div
                className=" md:block hidden"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  scale: { type: "spring", bounce: 0.5, stiffness: 100 },
                }}
                viewport={{ once: false }}
              >
                <div className="flex gap-8">
                  <div className="w-[30%]">
                    <div className="w-full h-60 ">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-full  h-full rounded-md object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-[65%]">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-3xl font-semibold">{item.title}</h2>
                      <div className="flex items-center gap-8 ">
                        <span className="rounded-full px-4  bg-gray-900 opacity-80 text-white text-lg">
                          {item.year}
                        </span>
                        <p className="text-xl text-gray-500 font-[400]">
                          Portfolio
                        </p>
                      </div>

                      <p className="w-[70%]">{item.description}</p>
                    </div>
                  </div>
                </div>
                <hr className="mt-4 border border-gray-400" />
              </motion.div>
              {/* small screen */}
              <motion.div
                className=" md:hidden block"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  scale: { type: "spring", bounce: 0.5, stiffness: 100 },
                }}
                viewport={{ once: false }}
              >
                <div className="flex flex-col">
                  <div className="w-full">
                    <div className=" h-60 ">
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-full  h-full rounded-md object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-semibold line-clamp-2">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-8 ">
                        <span className="rounded-full px-4  bg-gray-900 opacity-80 text-white text-sm">
                          {item.year}
                        </span>
                        <p className="text-lg text-gray-500 font-[400]">
                          Portfolio
                        </p>
                      </div>

                      <p className="text-start text-sm text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-4 border border-gray-400" />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedWork;
