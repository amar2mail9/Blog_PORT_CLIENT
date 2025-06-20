import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // For social media icons

const Footer = () => {
  return (
    <section className="lg:px-[10%] md:px-[7%] sm:px-[5%] px-10 bg-gray-900 h-auto text-white py-8">
      <footer className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <p className="text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/about-us" className="hover:text-blue-500">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-blue-500">
                Works
              </Link>
            </li>

            <li>
              <Link href="/blogs" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2025 Amar. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
