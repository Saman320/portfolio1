"use client";
import React from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div id="Contact" className="text-white bg-gradient-to-r from-gray-800 to-black font-sans bg-cover bg-center bg-fixed">
            <section className="container mx-auto px-5">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-white">Contact Me</h2>
                    <p className="text-gray-300 mt-4">
                        Feel free to reach out for collaborations or just a friendly hello 👋
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Item 1 */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center">
                            <AiOutlineMail className="text-5xl text-gray-500 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-white">Email</h3>
                            <Link href="mailto:samansiddiqui320@gmail.com">
                                <p className="text-gray-300">samansiddiqui320@gmail.com</p>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Item 2 */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <div className="text-center">
                            <AiOutlinePhone className="text-5xl text-gray-500 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-white">Phone</h3>
                            <p className="text-gray-300">+923149261518</p>
                        </div>
                    </motion.div>

                    {/* Contact Item 3 */}
                    <motion.div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <div className="text-center">
                            <AiOutlineEnvironment className="text-5xl text-gray-500 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-white">Location</h3>
                            <p className="text-gray-300">Karachi Sindh</p>
                        </div>
                    </motion.div>
                </div>

                {/* Contact Form */}
                <div className="mt-12 flex justify-center items-center">
                    <motion.form
                        className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-white text-center">Send me a message</h3>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring focus:border-gray-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring focus:border-gray-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                className="w-full border border-gray-600 bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring focus:border-gray-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white font-medium p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>

                {/* Hire Me Section */}
                <div className="mt-16 text-center">
                    <motion.div
                        className="bg-gray-800 p-8 rounded-lg shadow-lg"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-white">Hire Me</h3>
                        <p className="text-gray-300 mb-6">
                            I am open to freelance opportunities and collaborations. If you are looking for a dedicated and skilled developer to bring your project to life, feel free to reach out!
                        </p>
                        <Link href="https://www.linkedin.com/in/saman-siddiqui-0023b3292/" target="_blank">
                            <button className="bg-gray-900 text-white font-medium p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                View My LinkedIn
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
