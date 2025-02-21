"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const RecentPost = () => {
  const [recentPost, setRecentPost] = useState([
    {
      title: "Blog 1",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
      expert:
        "This approach will give you more flexibility and smoother animations when elements appear in the viewport. You can adjust the duration, easing, and other transition properties to further match your desired effect. Let me know if you need any further customizations!",
    },
    {
      title: "Blog 2",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
      expert:
        "This approach will give you more flexibility and smoother animations when elements appear in the viewport. You can adjust the duration, easing, and other transition properties to further match your desired effect. Let me know if you need any further customizations!",
    },
    {
      title: "Blog 3",
      thumbnail:
        "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=",
      expert:
        "This approach will give you more flexibility and smoother animations when elements appear in the viewport. You can adjust the duration, easing, and other transition properties to further match your desired effect. Let me know if you need any further customizations!",
    },
  ]);

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
        {recentPost.map((post, idx) => (
          <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={post.thumbnail}
                alt={post.title}
                className="w-full h-44 object-cover object-center"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography
                  className="line-clamp-4"
                  variant="body3"
                  sx={{ color: "text.secondary" }}
                >
                  {post.expert}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button
              variant="contained"
              className="bg-pink-500 text-white mx-4 mb-4"
            >
              Read More
            </Button>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentPost;
