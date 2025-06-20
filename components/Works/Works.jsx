"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrush, FaDatabase } from "react-icons/fa";
import FeaturedWork from "../Home/FeaturedWork";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const Works = () => {
  const works = [
    {
      title: "Blog Website",
      icon: <FaLaptopCode />,
      description:
        "A fully functional blog platform built with modern tech stack.",
    },
    {
      title: "Flipkart Landing Page",
      icon: <FaLaptopCode />,
      description:
        "A clone landing page inspired by Flipkart, built with responsiveness in mind.",
    },
    {
      title: "Portfolio and Blog Website (MERN Stack)",
      icon: <FaLaptopCode />,
      description:
        "Combining creativity with full-stack technology to showcase projects and blogs.",
    },
    {
      title: "E-Commerce",
      icon: <FaLaptopCode />,
      description:
        "Robust database-driven e-commerce backend & frontend with secure data flow.",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-100 to-blue-50">
      <h2 className="text-center text-4xl font-extrabold text-blue-600 mb-16">
        My Works
      </h2>

      <div className="grid gap-10 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
            <Card className="bg-white hover:bg-blue-100 text-gray-800 hover:text-blue-700 transition-all duration-300 rounded-2xl shadow-md border border-gray-200">
              <CardActionArea className="p-6">
                <CardContent className="flex flex-col items-center justify-center space-y-5">
                  <div className="text-5xl text-blue-500">{work.icon}</div>
                  <Typography variant="h6" className="font-semibold text-xl">
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-center text-gray-600"
                  >
                    {work.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <FeaturedWork />
      </div>
    </section>
  );
};

export default Works;
