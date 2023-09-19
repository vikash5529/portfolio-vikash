"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView({
    sectionName: "About",
    threshold: 0.75,
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-4 px-2">
        I have a Bachelor of Technology degree in CSE from the
        <span className="font-bold">
          {" "}
          National Institute of Technology, Puducherry
        </span>
        , one of the premier engineering institutes in India. Currently, I work
        as a <span className="font-bold">senior software enginee</span>r at
        <span className="underline italic"> CoinDCX,</span> India&apos;s largest and
        safest cryptocurrency exchange platform. Here, I am responsible for
        developing modules, features, and user interfaces for various products
        and services offered by the company. I also collaborate with
        cross-functional teams to ensure the quality, performance, and
        scalability of web applications.
      </p>
      <p className="mb-4 px-2">
        Beyond front-end coding chops, I&apos;m also passionate about writing and
        sharing what I&apos;ve learned both with my teammates and the broader web
        community. I value the ability to not only perform web development work
        but also help others improve their craft because I&apos;ve gained so much
        from others sharing their skills and knowledge. I&apos;m also pretty active
        on the <span className="font-bold">stack overflow</span> community where
        I have answered more than <span className="font-bold"> 200+ </span>
        questions On The technologies I have worked on.
      </p>
    </motion.section>
  );
}
