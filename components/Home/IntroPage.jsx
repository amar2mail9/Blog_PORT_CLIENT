"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const IntroPage = () => {
  return (
    <section className="w-full  lg:px-[10%] md:px-[7%] sm:px-[5%] px-10 bg-white text-gray-900 flex items-center justify-center  h-[80vh]  ">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16">
        <div>
          <div>
            <div className="md:text-left text-center">
              <h1 className="lg:text-5xl animate-pulse   md:text-4xl sm:text-3xl text-2xl  font-bold border-pink-500">
                Hi, I am Amar, <br />
              </h1>
              <h1 className="animation mt-3  whitespace-nowrap border-r-4 animate-typing overflow-hidden lg:text-5xl  md:text-4xl sm:text-3xl xs:text-2xl text-[27px] font-bold ">
                {" "}
                Creative Technologist
              </h1>
            </div>

            <p className="mt-5 md:text-left text-center md:line-clamp-3 line-clamp-4 md:text-lg text-sm font-[500] text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <div className="flex md:justify-start justify-center mt-4">
              <a href={"/Resume.pdf"} download>
                <button className="w-fit !md:text-lg !text-sm !px-8 !py-2  !rounded-lg !bg-pink-500 text-white flex items-center  gap-3">
                  Download Resume <FaDownload />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:justify-end justify-center">
          {/* image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              scale: { type: "tween", visualDuration: 1, bounce: 0.5 },
            }}
          >
            <div className="lg:w-[400px]   aspect-square md:w-[350px] w-[300px]  rounded-full">
              <img
                src="./myImage.jpeg"
                alt=""
                className="w-full h-full shadow-lg rounded-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroPage;
