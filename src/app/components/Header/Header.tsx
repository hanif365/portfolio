"use client";

import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center px-4 pt-10">
      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-lg md:text-xl"
      >
        <Image src="/moving-hand.gif" alt="moving-hand" width={50} height={50} />
        <span className="text-lg md:text-xl lg:text-2xl">Hello I&apos;m</span>
        {/* <IoHandRightOutline className="animate-wave" /> */}
      </motion.div>

      {/* Name Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl mt-4 font-medium"
      >
        MD. ABU HANIF
      </motion.h1>

      {/* Role & Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl md:text-2xl lg:text-4xl  max-w-3xl mt-18">
          Full-Stack Developer & Web Solutions Architect
        </h2>
       
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col md:flex-row items-stretch mt-12 rounded-xl shadow"
      >
        {/* Experience */}
        <div className="flex items-center gap-8 p-7 md:border-r border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold">5+ Years</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Professional Development Experience
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 p-7 md:border-r border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              Bangladesh <FaLocationDot className="text-red-500" />
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based in Dhaka, Available Worldwide
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex items-center p-7">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6366f1] text-white px-8 py-4 rounded-full hover:bg-[#4f46e5] transition-colors duration-300 font-medium"
          >
            Let&apos;s Discuss Your Project
          </motion.button>
        </div>
      </motion.div>

      {/* SEO-friendly hidden content */}
      <div className="sr-only">
        <h2>MD. Abu Hanif - Full Stack Developer in Bangladesh</h2>
        <p>
          Experienced web developer specializing in React, Next.js, Node.js, and
          modern web technologies. Providing professional web development
          services with 5+ years of experience.
        </p>
      </div>
    </header>
  );
};

export default Header;
