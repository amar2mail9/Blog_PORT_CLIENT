"use client";

import { categories } from "@/context/Category";
import React from "react";

const TopSection = () => {
  return (
    <div className="w-full my-6">
      {/* title */}
      <div className="w-full">
        <select
          name=""
          id=""
          className="text-white bg-gray-800 w-3/12 py-2 px-3 rounded-md  outline-none"
        >
          <option value="all-blog">All Blogs</option>
          {categories.map((category, idx) => (
            <option value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TopSection;
