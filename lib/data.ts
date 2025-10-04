import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import canteenImg from "@/public/canteen.png";
import eventasticImg from "@/public/eventastic.png";
import laundryPhpImg from "@/public/laundryPHP.png";
import laundryNextImg from "@/public/laundryNext.png";
import portfolioImg from "@/public/portfolio.png";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaPhp, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPrisma, SiMysql, SiPostgresql, SiFramer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
    title: "Laundry Management App (PHP)",
    location: "Jakarta, Indonesia",
    description:
      "Developed a laundry management web application using PHP, MySQL, HTML, CSS, and Bootstrap with CRUD features and reporting.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "School Canteen System",
    location: "Jakarta, Indonesia",
    description:
      "Built a school canteen management system with features for transactions, reports, discounts, and payment status using PHP, MySQL, and Bootstrap.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Eventastic Web App",
    location: "Jakarta, Indonesia",
    description:
      "Created an event management web application with participant registration, event management, and real-time reporting using Next.js, TypeScript, Tailwind CSS, and Supabase.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Saul in JakPunk (2D Game)",
    location: "Jakarta, Indonesia",
    description:
      "Created a 2D exploration game about a cat named Saul trapped in a futuristic city, built with Unity Engine.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
    {
    title: "Personal Portfolio Website",
    location: "Jakarta, Indonesia",
    description:
      "Designed and developed a personal portfolio website to showcase projects and skills with responsive design and interactive animations using Framer only",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Learning New Skills",
    location: "Online",
    description:
      "Continuously studying modern web technologies including Next.js, React, TypeScript, PostgreSQL, Prisma, API, and Supabase to strengthen full-stack development skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
    {
    title: "Laundry Management App (Next.js)",
    location: "Jakarta, Indonesia",
    description:
      "Developed a modern laundry management system with CRUD, authentication, and transaction features using Next.js, TypeScript, Tailwind CSS, shadcn/ui, Prisma, and Supabase PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;


export const projectsData = [
  {
    title: "Laundry Management App (Next.js)",
    description:
      "A modern laundry management web application with CRUD features, authentication, and transaction management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "Supabase PostgreSQL"],
    imageUrl: laundryNextImg,
    link: "http://laundry-management-nine.vercel.app/",
  },
  {
    title: "Laundry Management App (PHP)",
    description:
      "A web-based laundry management application built with PHP and MySQL, featuring CRUD operations and simple reporting.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    imageUrl: laundryPhpImg,
    link: "https://github.com/VoidNimm/Laundry-App.git",
  },
  {
    title: "School Canteen System",
    description:
      "Designed and developed a school canteen web system with features for transactions, reports, discounts, and payment status tracking.",
    tags: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    imageUrl: canteenImg,
    link: "https://github.com/VoidNimm/KantinSekolah.git",
  },
  {
    title: "Eventastic",
    description:
      "A web application for event management with registration, participant management, and real-time reporting features.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    imageUrl: eventasticImg,
    link: "https://github.com/VoidNimm/Eventastic.git",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Built a personal portfolio website showcasing projects, skills, and contact information with responsive design and interactive animations.",
    tags: ["Framer Only"],
    imageUrl: portfolioImg,
    link: "https://nimghanim.my.id",
  },
] as const;



export const skillsData = [
    { name: "HTML", icon: React.createElement(FaHtml5) },
    { name: "CSS", icon: React.createElement(FaCss3Alt) },
    { name: "JavaScript", icon: React.createElement(FaJsSquare) },
    { name: "TypeScript", icon: React.createElement(SiTypescript) },
    { name: "React", icon: React.createElement(FaReact) },
    { name: "Next.js", icon: React.createElement(TbBrandNextjs) },
    { name: "Node.js", icon: React.createElement(FaNodeJs) },
    { name: "Git", icon: React.createElement(FaGitAlt) },
    { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
    { name: "Prisma", icon: React.createElement(SiPrisma) },
    { name: "PHP", icon: React.createElement(FaPhp) },
    { name: "MySQL", icon: React.createElement(SiMysql) },
    { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
    { name: "Python", icon: React.createElement(FaPython) },
    { name: "Framer Motion", icon: React.createElement(SiFramer) },
  ] as const;
