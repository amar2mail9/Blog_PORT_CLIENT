"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import LoginPage from "../auth/LoginPage";
import Register from "../auth/Register";

export default function Layout({ children }) {
  const pathname = usePathname();
  const adminAuth = pathname === "/techpoly-admin";
  const adminSignUp = pathname === "/techpoly-admin/register";

  if (adminAuth) {
    return (
      <div className="w-full h-screen">
        <LoginPage />
      </div>
    );
  } else if (adminSignUp) {
    console.log(adminSignUp);

    return (
      <div className="w-full h-screen">
        <Register />
      </div>
    );
  }

  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
