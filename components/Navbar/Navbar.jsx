"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MenuRounded } from "@mui/icons-material";
import { Drawer, Modal } from "@mui/material";
import { blogData } from "@/context/BlogData"; // Import blog data

const Navbar = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const pathname = usePathname();

  const menu = [
    { menuName: "home", path: "/" },
    { menuName: "works", path: "/works" },
    { menuName: "blogs", path: "/blogs" },
    { menuName: "about", path: "/about-us" },
  ];

  // Toggle Drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Open & Close Search Modal
  const handleOpen = () => setSearchOpen(true);
  const handleClose = () => setSearchOpen(false);

  // Filter blogs based on search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav className="w-full sticky top-0 z-50 flex items-center justify-between bg-gray-100 h-16 py-2 shadow-md lg:px-[10%] md:px-[5%] px-[1rem]">
        {/* Logo Section */}
        <div className="w-[180px]">
          <Link href="/">
            <img src="/logo.png" alt="polytechub" className="object-cover" />
          </Link>
        </div>

        {/* Search Input for Larger Screens */}
        <form className="sm:block hidden relative">
          <div className="bg-gray-300 h-10 rounded-md w-[350px] flex items-center">
            <input
              type="text"
              className="bg-transparent w-full p-2 outline-none text-pink-600 rounded-full placeholder:text-pink-400"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="w-9 h-9 text-pink-400 flex justify-center items-center">
              <CiSearch className="w-full h-full p-1.5" />
            </button>
          </div>

          {/* Search Results Dropdown */}
          {searchTerm && (
            <div className="absolute top-12 left-0 w-full h-96 scroll-container  bg-white shadow-md rounded-md p-2">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="block p-2 hover:bg-gray-200 text-gray-700"
                    onClick={() => setSearchTerm("")}
                  >
                    {blog.title}
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 p-2">No results found</p>
              )}
            </div>
          )}
        </form>

        {/* Navigation Menu */}
        <ul className="hidden gap-10 items-center md:flex">
          {menu.map((menuItem, idx) => {
            const isActive = menuItem.path === pathname;
            return (
              <li key={idx}>
                <Link
                  href={menuItem.path}
                  className={`flex items-center gap-1 hover:text-pink-700 duration-300 text-gray-600 font-semibold text-[14px] ${
                    isActive ? "text-pink-600" : ""
                  }`}
                >
                  {menuItem.menuName.charAt(0).toUpperCase() +
                    menuItem.menuName.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Icons */}
        <div className="flex items-center gap-3">
          {/* Search Icon for Mobile */}
          <button
            onClick={handleOpen}
            className="w-10 sm:hidden flex items-center justify-center text-pink-600 h-10 rounded-full p-2"
          >
            <CiSearch className="w-full h-full" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleDrawer(!open)}
            className="w-10 md:hidden bg-pink-50 hover:bg-pink-100 duration-500 flex items-center justify-center text-pink-600 shadow-pink-200 h-10 rounded-full p-2"
          >
            <MenuRounded className="w-full h-full" />
          </button>
        </div>
      </nav>

      {/* Drawer Menu for Mobile */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <div className="w-full bg-[#262626] p-4 flex flex-col items-start gap-3">
          {menu.map((menuItem, idx) => {
            const isActive = pathname === menuItem.path;
            return (
              <Link
                key={idx}
                onClick={toggleDrawer(false)}
                href={menuItem.path}
                className={`${
                  isActive
                    ? "bg-pink-600 text-white rounded-md"
                    : "hover:bg-pink-50 hover:text-pink-500"
                } duration-300 py-2 px-4 w-full text-center rounded-md text-gray-300 font-semibold`}
              >
                {menuItem.menuName.charAt(0).toUpperCase() +
                  menuItem.menuName.slice(1)}
              </Link>
            );
          })}
        </div>
      </Drawer>

      {/* Search Modal for Mobile */}
      <Modal open={searchOpen} onClose={handleClose} className="bg-[#0a0a0ad8]">
        <div className="w-full p-4">
          <div className="w-full h-10 bg-gray-200 border-2 border-pink-300 rounded-md flex items-center">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full h-full bg-transparent p-2 outline-none rounded-full placeholder:text-pink-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="w-10 h-10 p-2 text-pink-400">
              <CiSearch className="w-full h-full" />
            </button>
          </div>

          {/* Search Results in Modal */}
          <div className="px-2 py-3 text-white w-full    rounded-lg">
            {searchTerm && (
              <div className="bg-white p-2 w-full scroll-container h-96 rounded-md">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/blog/${blog.slug}`}
                      className="block p-2 hover:bg-gray-200 text-gray-700"
                      onClick={() => {
                        setSearchTerm("");
                        handleClose();
                      }}
                    >
                      {blog.title}
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500 p-2">No results found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
