"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationStart?: string;       // baru: kontrol start rotasi container
  rotationEnd?: string;
  wordAnimationStart?: string;  // baru: kontrol start animasi kata
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.12,
  baseRotation = 2,
  blurStrength = 6,
  containerClassName = '',
  textClassName = '',
  // default agar animasi terasa dalam 1 layar
  rotationStart = 'top 90%',
  rotationEnd = 'top 50%',
  wordAnimationStart = 'top 90%',
  wordAnimationEnd = 'top 50%',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    // Pastikan state awal terlihat (blur + opacity rendah) meskipun elemen sudah di viewport saat mount
    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      willChange: 'opacity, filter',
    });
    gsap.set(el, { transformOrigin: '0% 50%', rotate: baseRotation });

    const rotateTween = gsap.to(el, {
      ease: 'none',
      rotate: 0,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: rotationStart,
        end: rotationEnd,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    const revealOpacityTween = gsap.to(wordElements, {
      ease: 'none',
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: wordAnimationStart,
        end: wordAnimationEnd,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    let revealBlurTween: gsap.core.Tween | undefined;
    if (enableBlur) {
      revealBlurTween = gsap.to(wordElements, {
        ease: 'none',
        filter: 'blur(0px)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: wordAnimationStart,
          end: wordAnimationEnd,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      rotateTween.scrollTrigger?.kill();
      revealOpacityTween.scrollTrigger?.kill();
      revealBlurTween?.scrollTrigger?.kill();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationStart,
    rotationEnd,
    wordAnimationStart,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      {/* Hilangkan default font-size, serahkan ke textClassName agar bisa override di luar */}
      <p className={`leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;