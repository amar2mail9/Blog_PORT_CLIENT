import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";
import { ToastContainer } from "react-toastify";

// Use Inter or Poppins if Geist is not available in Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Ensure required weights are available
});

export const metadata = {
  title: "Polytechub",
  description: "A tech blog covering development, tutorials, and insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased text-gray-900`}
      >
        <Layout>{children}</Layout>
        <ToastContainer />
      </body>
    </html>
  );
}
