"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useSectionInView } from "@/lib/hooks";

// Import dinamis untuk GSAP
const ScrollReveal = dynamic(() => import("./ScrollReveal"), { ssr: false });

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Heading */}
      <ScrollReveal
        containerClassName="my-6"
        textClassName="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight"
        // opsional override agar lebih singkat lagi
        rotationStart="top 95%"
        rotationEnd="top 55%"
        wordAnimationStart="top 95%"
        wordAnimationEnd="top 55%"
        baseOpacity={0.15}
        blurStrength={6}
      >
        About me
      </ScrollReveal>

      {/* Paragraf 1 */}
      <ScrollReveal
        containerClassName="my-3"
        textClassName="text-lg sm:text-xl text-gray-700 mb-3"
        rotationStart="top 95%"
        rotationEnd="top 55%"
        wordAnimationStart="top 95%"
        wordAnimationEnd="top 55%"
        baseOpacity={0.15}
      >
        I’m a Junior Full‑Stack Developer with an RPL background. I’ve built web apps (laundry, canteen, events) and small 2D games. Core stack: Next.js, TypeScript, Tailwind CSS, Prisma, and Supabase — plus PHP, MySQL, and Bootstrap.
      </ScrollReveal>

      {/* Paragraf 2 */}
      <ScrollReveal
        containerClassName="my-3"
        textClassName="text-lg sm:text-xl text-gray-700"
        rotationStart="top 95%"
        rotationEnd="top 55%"
        wordAnimationStart="top 95%"
        wordAnimationEnd="top 55%"
        baseOpacity={0.15}
      >
        I enjoy problem‑solving and crafting smooth UX. Open to Junior Full‑Stack roles. Off‑screen: gaming, movies, and calisthenics. Currently learning Next.js and React.
      </ScrollReveal>
    </section>
  );
}