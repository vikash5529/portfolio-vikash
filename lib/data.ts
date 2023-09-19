import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduation NIT,Puducherry",
    location: "Puducherry, India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "Software Developer at Mphasis",
    location: "Chennai, India",
    description: "I worked as a front-end developer for 2 years.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2017 - 2018",
  },
  {
    title: "Consultant at TechVerito Softwares",
    location: "Pune, India",
    description:
      "I worked as a full-stack developer for 1.5 years. My stack included Angular, React.js, Vue.js, RoR, GoLang TypeScript",
    icon: React.createElement(BsPersonWorkspace),
    date: "2018 - 2020",
  },
  {
    title: "Software Developer at Acquia",
    location: "Pune, India",
    description:
      "I worked as a Frontend developer for 1.6 years. My stack included Angular, React.js, TypeScript",
    icon: React.createElement(BsPersonWorkspace),
    date: "2020 - 2021",
  },
  {
    title: "Senior Software Engineer at CoinDCX",
    location: "Noida, India",
    description:
      "I'm now working as a Senior Software Engineer. My stack includes Angular React, Next.js, TypeScript.  I'm open to new opportunities.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2021 - present",
  },
] as const;

export const skillsData = [
  "Angular",
  "React.js",
  "Next.js",
  "Vue.js",
  "Ionic",
  "Flutter",
  "Redux/NgRx",
  "RxJs",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Dart",
  "CSS",
  "Git",
  "HTML5",
  "Jest",
  "WebPack",
  "Gulp",
] as const;
