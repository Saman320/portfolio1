"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set `once: false` to trigger animations every time

  return (
    <div id="About">
    <section className="text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed">
      <div className="container mx-auto flex flex-col items-center px-5 py-24">
        <div ref={ref} className="xl:w-1/2 lg:w-3/4 w-full text-center mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl font-semibold leading-tight text-gray-200 mb-6 shadow-lg"
            initial={{ opacity: 0, y: -20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }}
          >
            My Education
          </motion.h1>

          <motion.p 
            className="mb-8 leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I have completed my Bachelors degree in Commerce from Karachi University. 
            Prior to that, I completed my I.Com from Women College Nazimabad and my matriculation in Science from Islamia School Nazimabad.
          </motion.p>

          <motion.p 
            className="mb-8 leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            For the past year, I have been dedicated to learning full-stack web development, 
            honing my skills and preparing to tackle real-world challenges in the tech industry.
          </motion.p>

          <motion.p 
            className="mb-8 leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            In addition to my focus on web development, I have delved into the realm of YouTube SEO optimization,
            leveraging my analytical skills to enhance the discoverability of digital content. Furthermore, my
            proficiency in Canva designing adds a creative dimension to my skill set, allowing me to craft visually
            compelling digital experiences.
          </motion.p>

          <motion.p 
            className="mb-8 leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Driven by a relentless desire to grow and evolve, I am eager to transition from a learner to a hands-on
            practitioner, ready to tackle real-world challenges and contribute meaningfully to innovative projects.
          </motion.p>

          <span className="inline-block h-1 w-20 rounded bg-gray-500 mt-8 mb-6" />
          <h2 className="text-2xl font-medium title-font tracking-wider text-white mb-2">
            SAMAN SIDDIQUI
          </h2>
          <p className="text-gray-300">Aspiring Full-Stack Web Developer</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
