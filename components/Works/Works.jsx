"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrush, FaDatabase } from "react-icons/fa"; // Importing some example icons
import FeaturedWork from "../Home/FeaturedWork";
import WebIcon from "@mui/icons-material/Web";
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
    <section className="w-full py-12 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
        My Works
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 px-10">
        {works.map((work, index) => (
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2, // Stagger animation delay for each work
            }}
            viewport={{ once: false }}
            key={index}
          >
            <Card className="p-6 bg-white">
              <CardActionArea>
                <CardContent className="flex items-center justify-center flex-col">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    className="!text-pink-600 !text-4xl !text-center"
                  >
                    {work.icon}
                  </Typography>

                  <Typography
                    variant="body1"
                    className="!text-center !font-semibold !text-xl !text-gray-700"
                  >
                    {work.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    className="text-center"
                  >
                    {work.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-8"></div>
      <FeaturedWork />
    </section>
  );
};

export default Works;
