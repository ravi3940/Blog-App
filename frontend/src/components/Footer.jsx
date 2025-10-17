import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterCom = () => {
  return (
    <footer className="border-t-4 border-indigo-500 dark:border-pink-500 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="w-full max-w-7xl mx-auto px-6 py-8">
        {/* Top Row: Logo + Links */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          {/* Logo Section */}
          <div>
            <Link
              to="/"
              className="text-xl font-semibold whitespace-nowrap dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Ravi
              </span>{" "}
              Blog
            </Link>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Sharing ideas, insights, and creativity — built with us
              
            </p>
          </div>

          {/* Footer Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm font-medium">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-pink-500 transition">
                About
              </Link>
              <Link to="/projects" className="hover:text-pink-500 transition">
                Projects
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link to="/services" className="hover:text-pink-500 transition">
                Services
              </Link>
              <Link to="/pricing" className="hover:text-pink-500 transition">
                Pricing
              </Link>
              <Link to="/blog" className="hover:text-pink-500 transition">
                Blog
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link to="/privacy" className="hover:text-pink-500 transition">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
              <Link to="/terms" className="hover:text-pink-500 transition">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Bottom Row: Social Icons + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex space-x-5 text-lg">
            <a
              href="#"
              className="hover:text-indigo-500 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Copyright */}
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">
            © {new Date().getFullYear()}{" "}
            <Link
              to="/"
              className="hover:underline hover:text-pink-500 transition"
            >
              Ravi Blog™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
