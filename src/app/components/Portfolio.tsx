"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div id="Portfolio">
            <section className="text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-semibold leading-tight mb-6 shadow-lg">
                            My Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
                            I take pride in delivering high-quality, user-focused projects. My recent work showcases
                            a blend of innovation and functionality, tailored to meet client needs in a dynamic digital landscape.
                        </p>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {/* Project 1 */}
                        <motion.div
                            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                alt="Mens Perfume Website"
                                className="w-full h-64 object-cover"
                                src="/assets/picture/mens.jpg"  // Correct path
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">Mens Perfume Website</h2>
                                    <p>A beautiful website showcasing a variety of mens perfumes.</p>
                                    <Link href="https://mens-perfume-website.vercel.app/" passHref>
                                        <p className="mt-2 underline cursor-pointer">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                alt="Womens Perfume Website"
                                className="w-full h-64 object-cover"
                                src="/assets/picture/womens.jpg"  // Correct path
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">Womens Perfume Website</h2>
                                    <p>An elegant website featuring a range of womens perfumes.</p>
                                    <Link href="https://women-perfume-website.vercel.app/" passHref>
                                        <p className="mt-2 underline cursor-pointer">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            variants={fadeInUp}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                alt="My Portfolio"
                                className="w-full h-64 object-cover"
                                src="/assets/picture/portfolio.jpg"  // Correct path
                                width={500}
                                height={300}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-center text-white p-6">
                                    <h2 className="text-lg font-medium">My Portfolio</h2>
                                    <p>A personal portfolio showcasing my projects and skills.</p>
                                    <Link href="https://portfoli-custom-css.vercel.app/" passHref>
                                        <p className="mt-2 underline cursor-pointer">View Project</p>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
