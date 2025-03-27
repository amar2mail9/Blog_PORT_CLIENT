"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { usePathname } from "next/navigation";
// import LoginPage from "../../aminandauthfileandfloder/auth/LoginPage";
// import Register from "../../aminandauthfileandfloder/auth/Register";
// import ForgetPassword from "../../aminandauthfileandfloder/auth/ForgetPassword";
// import { CreateNew } from "../../aminandauthfileandfloder/auth/CreateNew";
// import AdminLayout from "../../aminandauthfileandfloder/admin/Layout/AdminLayout";

export default function Layout({ children }) {
  /* const pathname = usePathname();
  const adminAuth = pathname === "/techpoly-admin";
  const adminSignUp = pathname === "/techpoly-admin/register";
  const forgetpassword = pathname === "/password/forget";
  const newPassword = pathname === "/password/new-password";
  const adminRoutes = pathname === "/admin/:*";

  if (adminAuth) {
    return (
      <div className="w-full h-screen">
        <LoginPage />
      </div>
    );
  } else if (adminSignUp) {
    return (
      <div className="w-full h-screen">
        <Register />
      </div>
    );
  } else if (forgetpassword) {
    return (
      <div className="w-full h-screen">
        <ForgetPassword />
      </div>
    );
  } else if (newPassword) {
    return (
      <div className="w-full h-screen">
        <CreateNew />
      </div>
    );
  } else if (adminRoutes) {
    return <AdminLayout />;
  }
    
  */

  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
