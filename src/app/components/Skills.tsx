"use client";
import React, { useRef } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { motion, useInView } from "framer-motion";

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Animation happens only once when in view

    const skills = [
        { skill: "HTML", level: 100 },
        { skill: "CSS", level: 95 },
        { skill: "JavaScript/TypeScript", level: 90 },
        { skill: "NEXT JS", level: 70 },
        { skill: "Graphic Designing (Canva)", level: 90 },
        { skill: "YouTube SEO", level: 85 },
    ];

    return (
        <div id="Skills">
            <section className="text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed py-12">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h2 className="text-sm text-gray-400 tracking-widest font-medium title-font mb-1">
                            Skills
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-semibold leading-tight text-white mb-6">
                            My Skills
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {skills.map(({ skill, level }, index) => (
                            <motion.div
                                key={skill}
                                ref={ref}
                                className="p-4 sm:w-1/2 md:w-1/3 w-full"
                                initial={{ opacity: 0, y: 20 }} // Same animation for all screens
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered effect
                            >
                                <div className="flex flex-col h-full p-6 bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-500 text-white">
                                            <AiOutlineCheckSquare className="text-xl font-bold" />
                                        </div>
                                        <h2 className="text-white text-lg title-font font-bold">
                                            {skill}
                                        </h2>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="relative h-2 w-full bg-gray-700 rounded-xl">
                                            <div
                                                className="absolute bg-gray-500 h-2 rounded-xl"
                                                style={{ width: `${level}%` }}
                                            ></div>
                                        </div>
                                        <p className="font-bold text-gray-300 text-right mt-2">{level}%</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;
