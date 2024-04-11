import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.S. Civil Engineering",
    location: "Raleigh, NC",
    description:
      "I graduated from North Carolina State University with a B.S. in Civil Engineering, concentrating in structures",
    icon: React.createElement(LuGraduationCap),
    date: "May 2020",
  },
  {
    title: "Project Engineer",
    location: "Rocky Mount, NC",
    description:
      "As a structural engineer I ensured project timeline adherence, collaborated with municipal leaders on economic proposals, and performed comprehensive structural and safety analyses.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - July 2021",
  },
  {
    title: "Coding Bootcamp Graduate",
    location: "Durham, NC",
    description:
      "16-week full-stack coding bootcamp with an emphasis on Python, Javascript, and deploying web applications with Django",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022",
  },
  {
    title: "Back-End Engineer",
    location: "Durham, NC",
    description:
      "Developed EarthOS to automate Tiny Earth Toys' operations with a focus on a circular inventory system, created a tailored recommendation engine, and championed agile methodologies to enhance cross-department collaboration.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 2022 - Jan 2024",
  },
  {
    title: "Startup Software Engineer",
    location: "Raleigh, NC",
    description:
      "As the sole engineer, I spearheaded the startup's tech direction by deploying key business software, crafting a solid system architecture, designing data infrastructure, and writing Python scripts for web scraping.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - April 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;