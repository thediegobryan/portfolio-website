import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import totesmoveCo from "@/public/totesmoveco.png";
import petsoft from "@/public/petsoft.png";
import educationmapping from "@/public/educationmapping.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";

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
    title: "Totes Move Co.",
    description:
      "Ecommerce project that aims to help people with their move. It has features like booking, payments, and email.",
    tags: ["Next.js", "Typescript", "React", "Prisma", "Tailwind", "Stripe"],
    imageUrl: totesmoveCo,
    websiteUrl: "https://move-co.vercel.app/",
  },
  {
    title: "PetSoft",
    description:
      "Pay Daycare and Boarding Management System for Pet Care Businesses. It has features like check-in/out and email.",
    tags: ["Next.js", "Typescript", "React", "Prisma", "Tailwind", "Resend"],
    imageUrl: petsoft,
    websiteUrl: "https://pet-soft.vercel.app/app/dashboard",
  },
  {
    title: "Education Mapping",
    description:
      "An Education mapping project that utilizes geoJSON and api data to display college education level by county.",
    tags: ["JavaScripit", "APIs", "geoJSON", "D3", "CSS"],
    imageUrl: educationmapping,
    websiteUrl: "https://thediegobryan.github.io/FCC_Choropleth_Map/",
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
  "GraphQL",
  "Stripe",
  "Shopify",
  "FastAPI",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
] as const;
