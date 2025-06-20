import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="lg:px-[10%] md:px-[7%] sm:px-[5%] px-10 bg-gray-900 text-white py-10">
      <footer className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <p className="text-sm text-gray-300">
            I’m Amar, a MERN Stack Developer passionate about building clean,
            scalable web apps and solving real-world coding challenges.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="text-sm space-y-2 text-gray-300">
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
              href="https://github.com/amar2mail9"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amar2mail9"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/amar_dev_"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Amar. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
