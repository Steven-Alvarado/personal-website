import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import satelliteImg from "@/public/satellite.png";
import globaltempImg from "@/public/globaltemp.png";
import lexicalImg from "@/public/lexical.png";

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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Development Engineer Co-Op",
    location: "UPS — Hybrid",
    description:
      "Built a .NET microservice on GCP (GKE, BigQuery, Pub/Sub) that predicts package revisit likelihood using geospatial S2 Cell IDs, enabling automated hold/redirect recommendations. Deployed with Terraform and ArgoCD in a fully containerized Git/Azure DevOps workflow.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2025 – Present",
  },
  {
    title: "B.S. Computer Science",
    location: "New Jersey Institute of Technology",
    description:
      "Graduated with a B.S. in Computer Science and a Minor in Applied Mathematics. NSF S-STEM Scholar.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2025",
  },
  {
    title: "Software Developer Intern",
    location: "Thrivio Health — Hybrid",
    description:
      "Designed scalable backend architecture using AWS, MongoDB, and Express.js for an AI-driven social media platform. Implemented JWT-based authentication and applied agile methodologies with daily stand-ups and sprint cycles.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 – Aug 2024",
  },
] as const;
export const projectsData = [
  {
    title: "Decision Support Systems for Real-Time Coordination",
    description:
      "Research project at Texas A&M University-Kingsville. Built a cross-platform mobile UI with real-time geospatial visualization and incident reporting for post-disaster response, backed by a serverless AWS Lambda + MongoDB + Redis pipeline.",
    tags: ["React Native", "Expo", "Google Maps API", "AWS Lambda", "MongoDB", "Redis"],
    imageUrl: satelliteImg,
  },
  {
    title: "Mental Health Web Platform",
    description:
      "Led a team to design and build a full-stack mental health web app. Developed a scalable RESTful API with Express.js and PostgreSQL deployed on Railway, and a responsive frontend with React.js and TypeScript.",
    tags: ["React.js", "TypeScript", "Vite", "Express.js", "PostgreSQL", "Railway"],
    imageUrl: globaltempImg,
  },
  {
    title: "Space Satellite Coordinator",
    description:
      "Hackathon - Girlhacks NJIT 2023 \"best use of streamlit\" award winner. Streamlit web app that used N2YO and OpenAI APIs to provide users with real-time data on the closest satellites to any location.",
    tags: ["Python", "Streamlit", "OpenAI API"],
    imageUrl: lexicalImg,
  },
] as const;
export const skillsData = [
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Bash",
  "React",
  ".NET",
  "Next.js",
  "Express.js",
  "Spring Boot",
  "React Native",
  "Linux",
  "Git",
  "Google Cloud Platform",
  "AWS",
  "MongoDB",
  "MySQL",
  "Terraform",
  "ArgoCD",
  "Azure DevOps",
] as const;
