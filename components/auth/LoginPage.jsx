"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-br from-blue-100 to-purple-200">
      {/* Logo Section */}
      <div className="flex w-fit my-4 justify-center">
        <img src="./logo.png" alt="Logo" className="w-[70%]" />
      </div>

      {/* Login Box */}
      <div className="w-[450px] border-purple-500/40 rounded-lg p-6 shadow-xl border-2 bg-white">
        {/* Top Section */}
        <h2 className="text-[1.6rem] font-bold text-gray-800 text-center">
          Sign in to your account
        </h2>

        <div className="flex flex-col gap-4 mt-4">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="YourEmail" className="text-gray-700 font-medium">
              Your Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="py-2 px-3 bg-gray-100 outline-purple-400/70 rounded-md border border-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="YourPassword" className="text-gray-700 font-medium">
              Your Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="py-2 px-3 bg-gray-100 w-full outline-purple-400/70 rounded-md border border-gray-400"
              />
              <span className="absolute top-[10px] right-3 cursor-pointer">
                {showPassword ? (
                  <FaEye
                    onClick={handlePasswordShow}
                    className="text-[22px] text-gray-500 hover:text-purple-600 transition"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={handlePasswordShow}
                    className="text-[22px] text-gray-500 hover:text-purple-600 transition"
                  />
                )}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href={"#"}
              className="text-sm text-purple-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign-In Button */}
          <div className="flex w-full">
            <Button className="!w-full !bg-purple-600 !text-white !py-3 hover:!bg-purple-700 transition">
              Sign In
            </Button>
          </div>

          {/* Sign-Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-700">
              Don’t have an account yet?{" "}
              <Link href={"#"}>
                <strong className="text-purple-600 hover:underline">
                  Sign up
                </strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
