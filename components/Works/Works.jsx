"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrush, FaDatabase } from "react-icons/fa";
import FeaturedWork from "../Home/FeaturedWork";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const Works = () => {
  const works = [
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      description:
        "Building responsive and high-performance websites using modern technologies.",
    },
    {
      title: "Blog Web Development",
      icon: <FaLaptopCode />,
      description:
        "Creating mobile apps with an excellent user experience for both iOS and Android.",
    },
    {
      title: "UI/UX Design",
      icon: <FaBrush />,
      description:
        "Designing intuitive user interfaces and engaging user experiences with attention to detail.",
    },
    {
      title: "Database Management",
      icon: <FaDatabase />,
      description:
        "Designing and managing databases that store and retrieve information efficiently and securely.",
    },
  ];

  return (
    <section className="w-full py-12 bg-pink-50">
      <h2 className="text-center text-4xl font-bold text-pink-600 mb-12">
        My Works
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 px-10">
        {works.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            key={index}
          >
            <Card className="bg-white hover:bg-pink-200 hover:text-white ease-in-out duration-300 transition-all shadow-lg rounded-2xl border border-pink-100">
              <CardActionArea className="p-6">
                <CardContent className="flex flex-col items-center justify-center space-y-4">
                  <Typography
                    variant="h4"
                    component="div"
                    className="text-5xl text-pink-500 group-hover:text-white"
                  >
                    {work.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="font-bold text-xl text-pink-600 group-hover:text-white"
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-center text-gray-600 group-hover:text-white"
                  >
                    {work.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <FeaturedWork />
      </div>
    </section>
  );
};

export default Works;
