"use client";


import React from "react";

const TopSection = () => {
  return (
    <div className="w-full my-6">
      {/* title */}
      <div className="w-full">
        <select
          name=""
          id=""
          className="text-gray-900 bg-gray-100 lg:w-3/12 md:w-4/12 sm:w-6/12 w-[90%] py-2 px-3 rounded-md  outline-none"
        >
          <option value="all-blog">All Blogs</option>
          {/* {categories.map((category, idx) => (
            <option key={idx} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))} */}
        </select>
      </div>
    </div>
  );
};

export default TopSection;
