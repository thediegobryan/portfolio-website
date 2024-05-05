"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/diegoprofile.jpg"
              alt="Diego Bryan Profile Picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-25 w-25 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-2 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Diego.</span> I'm a{" "}
        <span className="font-bold">Full Stack Software Engineer</span> who is
        passionate about solving problems with{" "}
        <span className="font-bold">
          technical analysis, creativity, and team-driven development.
        </span>{" "}
        I have experience in an <span className="font-bold">agile</span> team
        environment with a proven ability to anticipate and{" "}
        <span className="italic">exceed business needs.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/diego-bryan-resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition hover:opacity-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-bryan/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] cursor-pointer hover:text-gray-950 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/thediegobryan"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] cursor-pointer hover:text-gray-950 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
