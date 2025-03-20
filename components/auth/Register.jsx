"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    contact: "",
    email: "",
    password: "",
  });

  const handlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      {/* Logo Section */}
      <div className="flex w-fit my-4 justify-center">
        <Image src="/logo.png" alt="Logo" width={160} height={160} />
      </div>

      {/* Register Box */}
      <div className="sm:w-[420px] w-full max-w-[95%] mx-auto border-purple-500/40 rounded-lg p-6 shadow-xl border-2 bg-white">
        {/* Title */}
        <h2 className="text-[1.8rem] font-bold text-gray-800 text-center">
          Create an Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              className="input-style"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              placeholder="johndoe123"
              className="input-style"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="9876543210"
              className="input-style"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input-style"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="input-style w-full"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handlePasswordShow}
                className="absolute top-[12px] right-4 text-gray-500 hover:text-purple-600 transition"
              >
                {showPassword ? (
                  <FaEye className="text-[22px]" />
                ) : (
                  <FaEyeSlash className="text-[22px]" />
                )}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#7C3AED",
              "&:hover": { backgroundColor: "#6D28D9" },
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Register
          </Button>
        </form>

        {/* Sign-In Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/techpoly-admin">
              <strong className="text-purple-600 hover:underline">
                Sign in
              </strong>
            </Link>
          </p>
        </div>
      </div>

      {/* Styles for input */}
      <style jsx>{`
        .input-style {
          padding: 10px 12px;
          background-color: #f3f4f6;
          border: 1px solid #a78bfa;
          border-radius: 8px;
          outline: none;
          transition: 0.3s;
        }
        .input-style:focus {
          border-color: #7c3aed;
          box-shadow: 0px 0px 8px rgba(124, 58, 237, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Register;
