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
        I&apos;m a{" "}
        <span className="font-medium">Computer Science graduate from NJIT (Dec 2025)</span>{" "}
        with a passion for{" "}
        <span className="font-medium">software development and cloud infrastructure</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        design and problem-solving process — I enjoy understanding systems deeply and building{" "}
        <span className="underline">scalable, efficient solutions to real-world problems</span>.{" "}
        I&apos;m currently working as a{" "}
        <span className="font-medium">Software Development Engineer Co-Op at UPS</span>,
        building microservices and data pipelines on Google Cloud Platform.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy being outdoors, listening to music, and reading.
        I love taking on new challenges and building things that matter.
      </p>
    </motion.section>
  );
}
