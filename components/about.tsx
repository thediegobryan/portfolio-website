"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Civil Engineering, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned
        full-stack web development. As an engineer, I love the feeling of
        finally figuring out a solution to a problem. My core stack is
        TypeScript, Next.js, Django, and Postgresql. I am also familiar with
        Node.Js, Python, Prisma, and FastAPI. I am always looking to learn new
        technologies. I am currently looking for a full-time position as a
        software developer.
      </p>

      <p>
        When I'm not coding, I enjoy rock climbing, cooking, and playing with my
        dog.
      </p>
    </motion.section>
  );
}
