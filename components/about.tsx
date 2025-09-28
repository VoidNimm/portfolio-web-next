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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Junior Full-Stack Developer</span>{" "}
        with a background in{" "}
        <span className="font-medium">Software Engineering (RPL)</span>. I have
        hands-on experience building{" "}
        <span className="font-medium">web applications</span> such as laundry
        management systems, school canteen platforms, and event management
        tools, as well as developing
        <span className="font-medium">2D games</span>. My core stack includes{" "}
        <span className="font-medium">
          Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase
        </span>
        , and I also have experience with{" "}
        <span className="font-medium">PHP, MySQL, and Bootstrap</span>. I enjoy
        solving problems, creating scalable solutions, and delivering
        interactive user experiences. I am currently looking for an opportunity
        to grow as a{" "}
        <span className="font-medium">Junior Full-Stack Developer</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and exercise like calisthenics. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">next js and react.</span>
      </p>
    </motion.section>
  );
}
