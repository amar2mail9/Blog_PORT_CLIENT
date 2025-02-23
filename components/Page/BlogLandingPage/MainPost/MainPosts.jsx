"use client";
import React, { useState } from "react";
import LatestPost from "./LatestPost";
import { motion } from "framer-motion";
import { blogData } from "@/context/BlogData";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";
import { FcCalendar } from "react-icons/fc";

const MainPosts = () => {
  const [count, setCount] = useState(6);
  return (
    <section className="flex md:flex lg:flex-row flex-col gap-6 justify-between lg:px-[5%] md:px-[8%] sm:px-[5%] p-5 bg-gray-900 my-4 text-white">
      <div className="lg:w-[75%] w-full">
        <div className="my-4 mb-8">
          <h1 className="lg:text-2xl md:text-xl text-lg">Main Blog</h1>
        </div>
        <div className="w-full gap-8 grid lg:grid-cols-3 md:grid-cols-2">
          {blogData.slice(0, count).map((post, idx) => {
            return (
              <div key={idx}>
                <motion.div
                  className="rounded-lg overflow-hidden hover:shadow-md hover:shadow-gray-700 duration-500 ease-in-out transition-all"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                    scale: { type: "spring", bounce: 0.5, stiffness: 1 },
                  }}
                  viewport={{ once: false }}
                >
                  <Card
                    sx={{ maxWidth: "100%" }}
                    className="!bg-gray-900 border !border-gray-800 rounded-lg !text-white my-swiper-slide"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={post.imageThumbnail}
                        alt="green iguana"
                        className="transition-all ease-in-out duration-1000 hover:brightness-50"
                      />

                      <CardContent>
                        <div className="flex gap-3 items-center">
                          <Typography
                            gutterBottom
                            variant="button"
                            component="div"
                            className="!text-pink-600 text-[13px] py-1 !bg-gray-800 w-fit px-4 !rounded-md !capitalize"
                          >
                            {post.category.length > 14
                              ? `${post.category.slice(0, 14)}...`
                              : post.category}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="button"
                            component="div"
                          >
                            <span className="flex items-center">
                              <FcCalendar className="w-6 h-6 p-1" />
                              <span className="!text-[10px] !text-gray-500">
                                {post.publishDate}
                              </span>
                            </span>
                          </Typography>
                        </div>
                        <Typography
                          gutterBottom
                          variant="h2"
                          component="h1"
                          className="!text-gray-100 !line-clamp-2 !text-[16px]"
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="p"
                          sx={{ color: "text.secondary" }}
                          className="!line-clamp-3 !text-xs !text-gray-600"
                        >
                          {post.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => {
              setCount((prev) => prev + 6);
            }}
            className="!bg-pink-600 !text-white hover:!bg-pink-700 duration-300"
          >
            View More
          </Button>
        </div>
      </div>

      {/* Latest Post */}
      <div className="lg:w-[25%] w-full">
        <LatestPost />
      </div>
    </section>
  );
};

export default MainPosts;
