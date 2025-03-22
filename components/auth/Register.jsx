"use client";
import { registerRoute } from "@/context/apiRoutes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdPhone,
  MdAccountCircle,
  MdVisibility,
  MdVisibilityOff,
  MdAdminPanelSettings,
} from "react-icons/md";
import { toast } from "react-toastify";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      const res = await fetch(registerRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          password,
          username,
          phone,
          role: role ? "user" : "admin",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || data.message);
      }

      toast.success(data.message);
      setFullname("");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setBtnDisable(
      !(
        fullname.length > 3 &&
        username.length > 5 &&
        email.length > 6 &&
        phone.length > 8 &&
        password.length >= 8
      )
    );
  }, [fullname, username, email, phone, password]);

  return (
    <div className="relative w-full h-screen">
      <img
        src="https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148357087.jpg"
        alt="background"
        loading="lazy"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="fixed w-full h-full flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg w-[400px] p-6 border border-white/20 rounded-lg shadow-xl text-white">
          <div className="mb-4">
            <div className="flex  justify-center">
              <button
                onClick={() => setRole(!role)}
                className="bg-gray-700 flex text-white p-2 w-10 h-10 rounded-full"
              >
                {role ? (
                  <FaUserAlt className="w-full h-full" />
                ) : (
                  <MdAdminPanelSettings className="w-full h-full" />
                )}
              </button>
            </div>

            <h2 className="text-center text-2xl font-semibold ">
              Create an Account
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                placeholder: "Full Name",
                type: "text",
                id: "fullname",
                icon: <MdPerson />,
                value: fullname,
                setValue: setFullname,
              },
              {
                placeholder: "Username",
                type: "text",
                id: "username",
                icon: <MdAccountCircle />,
                value: username,
                setValue: setUsername,
              },
              {
                placeholder: "Email Address",
                type: "email",
                id: "email",
                icon: <MdEmail />,
                value: email,
                setValue: setEmail,
              },
              {
                placeholder: "Phone Number",
                type: "text",
                id: "phone",
                icon: <MdPhone />,
                value: phone,
                setValue: setPhone,
              },
            ].map(({ placeholder, type, id, icon, value, setValue }) => (
              <div key={id} className="relative w-full">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg">
                  {icon}
                </span>
                <input
                  id={id}
                  type={type}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholder}
                  className="border border-white/20 rounded-lg p-3 pl-10 bg-white/10 focus:ring-2 focus:ring-purple-500 w-full placeholder-white/60"
                />
              </div>
            ))}

            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg">
                <MdLock />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="border border-white/20 rounded-lg p-3 pl-10 pr-12 bg-white/10 focus:ring-2 focus:ring-purple-500 w-full placeholder-white/60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </button>
            </div>

            <button
              disabled={btnDisable}
              onClick={onSubmit}
              className={`bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg shadow-md ${
                btnDisable ? "opacity-40" : "opacity-100"
              }`}
            >
              {isLoading ? "Sending..." : "Register"}
            </button>
          </div>
          <div className="text-center text-sm text-white mt-4">
            Already have an account?{" "}
            <Link
              href="/techpoly-admin"
              className="text-purple-400 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
