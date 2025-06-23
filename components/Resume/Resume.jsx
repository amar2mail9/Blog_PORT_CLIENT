// ResumeComponent.jsx
"use client";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaGithub,
  FaFileDownload,
  FaDownload,
} from "react-icons/fa";

import { Button } from "@mui/material";

const ResumeComponent = () => {
  return (
    <section className="bg-indigo-100 py-16">
      <div className="bg-white border text-black p-8 max-w-4xl mx-auto ">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-3xl font-bold">Er. Amar Kumar</h1>
            <p className="text-lg font-medium text-gray-700">
              MERN Stack Developer
            </p>
            <p className="text-sm">
              Bachelor of Computer Applications (BCA) – IGNOU (2024-2027)
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-6 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Dallupura, Noida, 110096
          </div>
          <div className="flex items-center gap-2">
            <FaPhone /> +91 96085 53167
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> amar47kumar47@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe /> polytechub.vercel.app
          </div>
          <div className="flex items-center gap-2">
            <FaGithub /> github.com/amar2mail9
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b mb-2">About Me</h2>
          <p>
            I am Amar Kumar, a MERN Stack Developer and BCA student with
            practical experience in building full-stack web applications. I
            specialize in creating responsive, user-focused solutions using
            React, Node.js, and MongoDB. My background in teaching and video
            editing strengthens my communication and creativity in delivering
            engaging digital experiences.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b mb-2">
            Work Experience
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Customer Support Executive</strong> – NSB BPO Services
              Pvt. Ltd., Noida (Mar 2025 - Jun 2025)
              <ul className="list-disc pl-6">
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
              (Mar 2023 - Nov 2024)
              <ul className="list-disc pl-6">
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
              <strong>Video Editor</strong> – Digital Polytechnic Classes
              (Online) (Mar 2021 – Feb 2022)
              <ul className="list-disc pl-6">
                <li>
                  Edited lecture/tutorial videos for YouTube and internal
                  platforms using Canva and Adobe tools.
                </li>
                <li>
                  Enhanced visuals, added transitions, and optimized for
                  engagement and learning.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Frontend:</strong> HTML/HTML5, CSS/CSS3, Tailwind CSS,
              Bootstrap, Material UI, JavaScript, React JS, Next JS
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
              <strong>MS Office:</strong> PowerPoint, MS Word, Excel, Outlook
            </div>
            <div>
              <strong>Video Editing:</strong> Canva, Adobe Photoshop, Premiere
              Pro, PowerDirector
            </div>
            <div>
              <strong>E-Commerce:</strong> Pricing, Product Listing,
              Multichannel Marketing, Marketplace, Storage
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Blog & Portfolio (MERN Stack Project)</strong> –
              <a
                href="https://polytechub.vercel.app"
                className="text-blue-600 underline ml-1"
                target="_blank"
              >
                Live Demo
              </a>
              <p className="mt-1">
                This is a full-stack application combining blog functionality
                with a personal portfolio site. It features a secure
                authentication system using JWT, a user-friendly admin dashboard
                for managing posts and users, and a beautifully styled
                responsive UI using Tailwind CSS and Material UI. MongoDB serves
                as the primary database, and the entire app is modular and
                scalable. It also supports protected routes, file uploads, and
                role-based access.
              </p>
            </li>
            <li>
              <strong>Blog Website (Frontend Only)</strong> –
              <a
                href="https://amartsblog.netlify.app"
                className="text-blue-600 underline ml-1"
                target="_blank"
              >
                Live Demo
              </a>
              <p className="mt-1">
                A modern frontend blog website created using React.js and
                Tailwind CSS. It consumes a fake API to simulate blog content
                and utilizes Swiper.js to provide an interactive carousel
                experience. The UI is fully responsive, providing an optimal
                reading experience on both mobile and desktop screens.
              </p>
            </li>
            <li>
              <strong>E-Commerce Website (Frontend Only)</strong> –
              <a
                href="https://a-storeamar.netlify.app"
                className="text-blue-600 underline ml-1"
                target="_blank"
              >
                Live Demo
              </a>
              <p className="mt-1">
                A feature-rich e-commerce frontend template using React.js and
                Tailwind CSS. Includes product cards, image sliders using
                Swiper.js, category-based filtering, responsive layouts, and
                interactive buttons. It provides a clean shopping interface
                ideal for showcasing products in a user-friendly way.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <div className="flex items-center justify-center w-full my-6">
        <a href={"./Er_Amar_Kumar_Resume_Single_Page.pdf"} download={true}>
          <Button className="!bg-indigo-800 !text-white !capitalize !px-6 flex items-center justify-center gap-2 ">
            <FaDownload /> Download
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ResumeComponent;
