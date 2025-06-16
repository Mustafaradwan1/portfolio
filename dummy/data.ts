import React from 'react'
import nike from '@/public/nike.png'
import hotel from '@/public/hotel.png'
import youTub from '@/public/youtub.png'
import ultra from '@/public/ultra.png'
import { AiFillBank } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";
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
]

export const projectsData = [
  {
    title: "Nike",
    description:
      "I worked as a frontEnd developer on this E-Commerce project. Users can purchase the latest products .",
    tags: [ "Html", "Css", "Bootstrap", "Javascript","Swiper Slider"],
    imageUrl: nike,
    hach:'https://nike-lyart-two.vercel.app/'
  },
  {
    title: "UltraSoft Solutions",
    description:
      "The site provides comprehensive software solutions to simplify financial management and enhance business efficiency.",
    tags: ["Next.js","typeScript","Tailwind css","Formik and yup","Api","next-intl"],
    imageUrl: ultra,
    hach:'https://ultra-solutions-six.vercel.app/en'
  },
  {
    title: "Hotel",
    description:
      "Simple design that mimics a hotel website with attractive visual effects.",
    tags: ["React.js", "framer motion", "Tailwind"],
    imageUrl: hotel,
    hach:"https://hotel-task-two.vercel.app/"
  },
  {
    title: "YoueTub clone",
    description:
      "Youtube clone its responsive website you can search for any video, movies, advertisements or channels   .",
    tags: ["React js", "Rapid Api", "Tailwind"],
    imageUrl: youTub,
    hach:"https://github.com/Mustafaradwan1/youtubClone"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "bootstrap5",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React js",
  "Redux",
  "Framer Motion",
  "Next.js",
  "Git",
];

export const experiencesData = [
  {
    cardTitle: "Graduated Bootcamp",
    location: "Dokki,Egypt",
    description:
      "As a recent graduate from Bootcamp route, I am thriving as a versatile Frontend Developer in the freelance landscape. Armed with a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting visually compelling and responsive web applications tailored to client needs.",
      date: "6/4/2023",
      icon: React.createElement(AiFillBank) 
    },
    {
      cardTitle: "Front-End Developer",
      location: "Freelancer",
      description:
      "I worked as a Freelance Frontend Developer With the goal of reaching Understanding the Client's Vision and Learning on the Go and Time Management",
      date: "1/1/2024",
      icon: React.createElement(AiOutlineMedium) 
    },
    {
      cardTitle: "Front-End Developer",
      location: "obour city,Egypt",
      description:
      "As a Junior Front-End Developer at | AMS Solutions, I have had the opportunity to contribute to dynamic projects and enhance my skills in frontend development. Working closely with a talented team of developers, designers, and project managers.",
      date: "13/10/2024",
      icon: React.createElement(AiOutlineSlack) 
  }
];

 

  
