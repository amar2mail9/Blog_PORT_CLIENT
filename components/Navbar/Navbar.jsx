"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { MenuRounded } from "@mui/icons-material";
import { Drawer, Modal } from "@mui/material";

const Navbar = () => {
  // hooks
  const [open, setOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();
  const menu = [
    {
      menuName: "home",
      path: "/",
    },
    {
      menuName: "works",
      path: "/works",
    },

    {
      menuName: "blogs",
      path: "/blogs",
    },
    {
      menuName: "about",
      path: "/about-us",
    },
  ];

  // method
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOpen = () => setSearchOpen(true);
  const handleClose = () => setSearchOpen(false);

  // return
  return (
    <>
      <nav className="w-full sticky top-0 z-50 flex items-center justify-between bg-gray-100 h-16 py-2 shadow-md lg:px-[10%] md:px-[5%] px-[1rem]">
        {/* Logo Section */}
        <div className="w-[180px]">
          <Link href={"/"}>
            <img
              src="./logo.png"
              alt="polytechub"
              className="object-cover object-center"
            />
          </Link>
        </div>

        {/* Search Icon */}
        <form action="" className="sm:block hidden">
          <div className="bg-gray-300 h-10 outline-none rounded-md w-[350px] flex justify-between items-center">
            <input
              type="text"
              className="bg-transparent w-full p-2 outline-none text-pink-600 rounded-full placeholder:text-pink-400"
              placeholder="Search..."
            />
            <button className="w-9 h-9 text-pink-400 flex justify-center items-center">
              <CiSearch className="w-full h-full p-1.5" />
            </button>
          </div>
        </form>

        {/* Menu */}
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

        <div className="flex items-center gap-3">
          {/* Search icon */}
          <button
            onClick={handleOpen}
            className="w-10 sm:hidden flex items-center justify-center text-pink-600 h-10 rounded-full p-2"
          >
            <CiSearch className="w-full h-full" />
          </button>

          {/* toggle menu */}
          <button
            onClick={toggleDrawer(!open)} // Open/close Drawer
            className="w-10 md:hidden bg-pink-50 duration-500 flex items-center hover:bg-pink-100 justify-center text-pink-600 shadow shadow-pink-200 h-10 rounded-full p-2"
          >
            <MenuRounded className="w-full h-full" />
          </button>
        </div>
      </nav>

      {/* Drawer Menu */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <div className="w-full bg-[#262626] p-4 flex flex-col items-start gap-3">
          {menu.map((menuItem, idx) => {
            const isActive = pathname === menuItem.path;
            return (
              <Link
                key={idx}
                onClick={toggleDrawer(false)} // Close the drawer when a menu item is clicked
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

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="bg-[#0a0a0ad8]"
      >
        <>
          <form action="" className="w-full p-4 ">
            <div className="w-full h-10 bg-gray-200 border-2 border-pink-300 rounded-md flex items-center justify-between">
              <input
                type="text"
                name=""
                placeholder="Search.. "
                className="w-full h-full bg-transparent p-2 outline-none rounded-full placeholder:text-pink-500"
              />
              <button className="w-10 h-10 p-2 text-pink-400">
                <CiSearch className="w-full h-full" />
              </button>
            </div>
          </form>

          <div className="px-8 py-3 text-white">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
          </div>
        </>
      </Modal>
    </>
  );
};

export default Navbar;
