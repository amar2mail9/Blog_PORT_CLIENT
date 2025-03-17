"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { blogData } from "@/context/BlogData";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const RecentPost = () => {
  return (
    <div className="w-full py-8 bg-cyan-50 lg:px-[10%] md:px-[7%] sm:px-[5%] px-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Recent Posts</h2>
        <Button variant="text">View All</Button>
      </div>

      {/* Card Grid */}
      <motion.div
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
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5"
      >
        {blogData.slice(0, 3).map((post, idx) => (
          <Card key={idx} sx={{ maxWidth: 345 }}>
            <Link href={`/blog/${post.slug}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={post?.featuredImage || "No Image"}
                  alt={post.title}
                  className="w-full h-44 object-cover object-center"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="text-[1.3rem]"
                    component="div"
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    className="line-clamp-3"
                    variant="body4"
                    sx={{ color: "text.secondary" }}
                  >
                    {post.expertContent}
                  </Typography>
                  <Typography className="flex justify-between items-center">
                    <span className="flex items-center  gap-3">
                      <CgProfile />{" "}
                      <label htmlFor="author name">{post.author.name}</label>
                    </span>
                    <span>{post.publishedAt}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <Button
                variant="contained"
                className="!bg-pink-500 !text-white !mx-4 !mb-4"
              >
                Read More
              </Button>
            </Link>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentPost;
