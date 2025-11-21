"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-up" | "parallax";
  delay?: number;
  duration?: number;
}

export function ScrollAnimationWrapper({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.5,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parallax specific hooks
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const variants = {
    hidden: { 
      opacity: 0,
      y: animation === "fade-up" ? 50 : 0,
      x: animation === "slide-left" ? -50 : animation === "slide-right" ? 50 : 0,
      scale: animation === "scale-up" ? 0.8 : 1,
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  if (animation === "parallax") {
    return (
      <motion.div ref={ref} style={{ y: springY }} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

