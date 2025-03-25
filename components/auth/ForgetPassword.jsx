"use client";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";

const ForgetPassword = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  const handleResetPassword = async () => {
    if (!usernameOrEmail) {
      alert("Please enter your email or username.");
      return;
    }

    setBtnDisable(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reset link sent to your email.");
      } else {
        alert(data.message || "Error sending reset link.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setBtnDisable(false);
  };

  return (
    <div className="bg-gray-900">
      <div className=" w-full h-screen flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg w-[400px] p-6 border border-white/20 rounded-lg shadow-xl shadow-black/40 text-white">
          {/* Title */}
          <h2 className="text-center text-2xl font-semibold mb-6">
            Forgot Password
          </h2>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {/* Username or Email Field */}
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg">
                <MdAccountCircle />
              </span>
              <input
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                value={usernameOrEmail}
                id="emailUsername"
                type="text"
                placeholder="Username or Email"
                className="border border-white/20 rounded-lg p-3 pl-10 bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition w-full placeholder-white/60"
                required
              />
            </div>

            {/* Reset Button */}
            <button
              disabled={btnDisable}
              onClick={handleResetPassword}
              type="button"
              className={`bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-all shadow-md shadow-purple-900/50 ${
                btnDisable ? "opacity-40 cursor-not-allowed" : "opacity-100"
              }`}
            >
              Send Reset Link
            </button>
          </div>

          {/* Sign-up Link */}
          <div className="text-center text-sm text-white mt-2">
            Don't have an account?{" "}
            <Link
              href="/techpoly-admin/register"
              className="text-purple-400 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
