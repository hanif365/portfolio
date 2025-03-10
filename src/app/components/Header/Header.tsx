"use client";

import { TfiLocationPin } from "react-icons/tfi";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 2xl:pt-36 max-w-7xl mx-auto">
      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl"
      >
        <Image
          src="/moving-hand.gif"
          alt="moving-hand"
          width={50}
          height={50}
          className="w-8 sm:w-10 md:w-12 lg:w-[50px] h-auto"
        />
        <span>Hello I&apos;m</span>
      </motion.div>

      {/* Name Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mt-2 sm:mt-3 md:mt-4 font-medium"
      >
        MD. ABU HANIF
      </motion.h1>

      {/* Role & Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:mt-4 lg:mt-6 2xl:mt-10"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mt-4 sm:mt-6 md:mt-8">
          Expert Full-Stack Developer Creating Modern Web Solutions For You
        </h2>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row items-stretch justify-center w-full max-w-5xl mx-auto mt-8 sm:mt-10 md:mt-12 rounded-xl dark:bg-primary shadow dark:shadow-[0_2px_6px_-1px_rgba(255,255,255,0.03),0_1px_4px_-2px_rgba(255,255,255,0.03)] gap-4 sm:gap-0"
      >
        {/* Experience */}
        <div className="flex items-center justify-center py-4 sm:py-5 md:py-6 lg:py-7  sm:border-r border-gray-200 dark:border-gray-800 flex-1">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-4xl">5+ Years</h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Professional Development Experience
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center py-4 sm:py-5 md:py-6 lg:py-7 sm:border-r border-gray-200 dark:border-gray-800 flex-1">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-4xl flex items-center justify-center gap-2">
              Bangladesh <TfiLocationPin />
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              Based in Dhaka, Available Worldwide
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex items-center py-4 sm:py-5 md:py-6 lg:py-7 justify-center flex-1">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-full sm:w-auto">
              <div className="relative flex items-center mb-1 sm:mb-2">
                <span className="absolute left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="absolute left-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></span>
                <p className="text-sm sm:text-base  text-gray-600 dark:text-gray-300 ml-4 sm:ml-5">
                  Available for Projects
                </p>
              </div>
              <button className="w-full sm:w-auto group relative bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-500 text-white px-6 sm:px-8 md:px-10 py-1 sm:py-1 rounded-xl font-medium text-sm sm:text-base">
                <span className="relative z-10">Let&apos;s talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="relative">
              <Image
                src="/hanif.png"
                alt="hanif's image"
                width={60}
                height={60}
                className="w-14 h-auto transform hover:scale-110 transition-transform duration-300 rounded-full"
                priority
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
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
