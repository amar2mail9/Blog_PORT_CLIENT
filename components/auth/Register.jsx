"use client";
import React, { useState } from "react";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdPhone,
  MdAccountCircle,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148357087.jpg?t=st=1742529893~exp=1742533493~hmac=ccf37163f50c46bd637723591a395f8f7be332f994a2c321b45337cd72ecfdf4&w=996"
        alt="background"
        loading="lazy"
        className="w-full h-full object-cover object-center absolute top-0 left-0"
      />

      {/* Registration Box */}
      <div className="fixed w-full h-full flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg w-[400px] p-6 border border-white/20 rounded-lg shadow-xl shadow-black/40 text-white">
          {/* Title */}
          <h2 className="text-center text-2xl font-semibold mb-6">
            Create an Account
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Input Fields */}
            {[
              {
                placeholder: "Full Name",
                type: "text",
                id: "fullname",
                icon: <MdPerson />,
              },
              {
                placeholder: "Username",
                type: "text",
                id: "username",
                icon: <MdAccountCircle />,
              },
              {
                placeholder: "Email Address",
                type: "email",
                id: "email",
                icon: <MdEmail />,
              },
              {
                placeholder: "Phone Number",
                type: "text",
                id: "number",
                icon: <MdPhone />,
              },
            ].map(({ placeholder, type, id, icon }) => (
              <div key={id} className="relative w-full">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg">
                  {icon}
                </span>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="border border-white/20 rounded-lg p-3 pl-10 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full placeholder-white/60"
                />
              </div>
            ))}

            {/* Password Field with Toggle */}
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg">
                <MdLock />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border border-white/20 rounded-lg p-3 pl-10 pr-10 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full placeholder-white/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400 transition"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            </div>

            {/* Register Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-all shadow-md shadow-purple-900/50">
              Register
            </button>
          </form>

          {/* Sign-in Link */}
          <div className="text-center text-sm text-white mt-4">
            Already have an account?{" "}
            <a
              href="/techpoly-admin"
              className="text-purple-400 hover:underline"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
