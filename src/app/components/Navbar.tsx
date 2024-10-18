"use client";
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Detects if the navbar is in view

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Brand Name */}
        <span className="text-xl font-medium text-white mb-4 md:mb-0">
          Saman Siddiqui
        </span>

        {/* Toggle Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded text-gray-200 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          ref={ref}
          className={`md:flex md:ml-auto md:items-center text-base justify-center space-y-2 md:space-y-0
                      ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          {/* Individual Link tags for each section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href="/" className="text-white font-bold mr-5 hover:text-gray-500">
              Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link href="#About" className="text-white font-bold mr-5 hover:text-gray-500">
              About
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Link href="#Skills" className="text-white font-bold mr-5 hover:text-gray-500">
              Skills
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link href="#Portfolio" className="text-white font-bold mr-5 hover:text-gray-500">
              Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link href="#Contact" className="text-white font-bold mr-5 hover:text-gray-500">
              Contact
            </Link>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
