"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaDownload } from "react-icons/fa";
import Link from "next/link";

const IntroPage = () => {
  return (
    <section className="w-full  lg:px-[10%] md:px-[7%] sm:px-[5%] px-10 bg-white text-gray-900 flex items-center justify-center  h-[80vh]  ">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16">
        <div>
          <div>
            <div className="md:text-left text-center">
              <h1 className="lg:text-5xl animate-pulse   md:text-4xl sm:text-3xl text-2xl  font-bold border-blue-500">
                Hi, I am Amar, <br />
              </h1>
              <h1 className="animation mt-3  whitespace-nowrap border-r-4 animate-typing overflow-hidden lg:text-5xl  md:text-4xl sm:text-3xl xs:text-2xl text-[27px] font-bold ">
                {" "}
                Creative Technologist
              </h1>
            </div>

            <p className="mt-5 md:text-left text-center md:line-clamp-3 line-clamp-4 md:text-lg text-sm font-[500] text-gray-600">
              <p class="text-lg leading-relaxed">
                Hello! I'm <strong>Amar Kumar</strong>, a passionate{" "}
                <strong>MERN Stack Developer</strong> currently pursuing a{" "}
                <strong>Bachelor of Computer Applications (BCA)</strong> through
                an open university. I’m deeply interested in web development and
                artificial intelligence, and I manage both my studies and work
                independently.
              </p>
              <p class="text-lg leading-relaxed mt-4">
                I have hands-on experience building full-stack applications
                using MongoDB, Express, React, and Node.js. I’ve also created my
                personal portfolio and blog website called{" "}
                <a
                  href="https://polytechub.vercel.app/"
                  class="text-blue-600 underline"
                >
                  Polytechub
                </a>
                , where I share projects, tutorials, and my learning journey.
              </p>
              <p class="text-lg leading-relaxed mt-4">
                Alongside my development career, I work in the BPO sector to
                support my education. I’m continuously learning JavaScript
                theory, TypeScript, and backend system design to improve my
                skills for interviews and real-world applications.
              </p>
              <p class="text-lg leading-relaxed mt-4">
                My goal is to become a full-time software developer, contribute
                to meaningful tech solutions, and inspire other self-learners in
                the tech community.
              </p>
            </p>

            <div className="flex md:justify-start justify-center mt-4">
              <Link
                href={"./webresume.pdf"}
                download={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-fit !md:text-lg !text-sm !px-8 !py-2  !rounded-lg !bg-blue-500 text-white flex items-center  gap-3">
                  Download Resume <FaDownload />
                </button>
              </Link>
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
                loading="lazy"
                src="./myImage.jpeg"
                alt="my pic"
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
