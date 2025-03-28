"use client";
import { commentsApi } from "@/context/CommentsApi";
import React, { useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
const ShowComments = () => {
  useEffect(() => {
    console.log("Total Comments:", commentsApi.length);
  }, []);

  return (
    <div>
      <div className="p-6 bg-white shadow-lg rounded-lg w-full  mt-4 mx-auto ">
        {/* Title & Count */}
        <div className="flex gap-3 items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-600">All Comments</h2>
          <span className="px-3 py-1 text-white bg-pink-500 rounded-full">
            {commentsApi.length}
          </span>
        </div>

        {/* Comment List */}
        {commentsApi.length > 0 ? (
          commentsApi.map(({ name, email, comment }, idx) => (
            <div
              key={idx}
              className="mb-4 p-4 bg-gray-100 border border-gray-300 rounded-lg flex gap-3 items-start"
            >
              {/* User Icon */}
              <AccountCircle className="text-gray-500" fontSize="large" />

              {/* Comment Content */}
              <div>
                <h3 className="font-semibold text-lg text-gray-700">{name}</h3>
                <p className="text-sm text-gray-500">{email}</p>
                <p className="text-gray-800 mt-2">{comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments available.</p>
        )}
      </div>
    </div>
  );
};

export default ShowComments;
