"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set `once: false` to trigger animations every time

  return (
    <section className="text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed">
      <div className="container mx-auto flex flex-col items-center px-5 py-16 md:flex-row md:py-24">
        
        {/* Image Section with Animation */}
        <motion.div
          ref={ref}
          className="flex justify-center items-center mb-8 md:mb-0 animate-fadeInLeft"
          initial={{ opacity: 0, x: -50 }} // Initial state
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animation state when in view
          transition={{ duration: 0.5 }} // Transition duration
        >
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden shadow-xl rounded-full border-8 border-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-500 hover:scale-105">
            <Image
              className="object-cover rounded-full"
              alt="Profile Picture"
              fill
              src="/assets/picture/b.jpg"
            />
          </div>
        </motion.div>

        {/* Text Section with Animation */}
        <motion.div
          ref={ref}
          className="flex flex-col items-center md:items-start md:text-left animate-fadeInRight md:pl-10"
          initial={{ opacity: 0, x: 50 }} // Initial state
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animation state when in view
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white text-center md:text-left">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer', 'AI Expert'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-16 h-1 bg-gray-500 mb-4"></div>
          <p className="mb-8 leading-relaxed text-lg text-gray-300">
            I am a web development and AI expert with a passion for creating innovative
            and user-friendly solutions. With over 5 years of experience in the tech industry,
            I have had the opportunity to work on various projects that have helped me hone my
            skills and stay up to date with the latest trends.
          </p>

          <Link href={"#Contact"}>
            <button className="font-semibold text-white bg-gray-700 inline-flex items-center border-0 py-2 px-6 
                            focus:outline-none hover:bg-gray-500 rounded-md shadow-lg transition-transform duration-300 transform hover:scale-110">
              Contact
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
