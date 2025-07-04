import React from 'react'
import nike from '@/public/nike.png'
import ZobaM from '@/public/zobaM.png'
import hotel from '@/public/hotel.png'
import youTub from '@/public/youtub.png'
import ultra from '@/public/ultra.png'
import WysiwygEditor from '@/public/WysiwygEditor.png'
import { AiFillBank } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";
export const links = [
  {
    name: "Home",
    hash: "/",
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
    title: "Zento_Market",
    description:
      "A multilingual e-commerce training project featuring login, search, filtering, and a user-specific cart. Fully custom-designed with a responsive UI and powered by DummyJSON API for mock product data.",
    tags: [ "Next.js", "tailwind.css", "typescript","Api","Redux-toolkit","next-intl"],
    imageUrl: ZobaM,
    hach:'https://zento-market.vercel.app/ar'
  },
  {
    title: "UltraSoft Solutions",
    description:
      "Built a multi-page, multilingual website using Next.js and TypeScript for an accounting and tech solutions company. The site showcases ERP services like sales, inventory, and finance with a clean, responsive UI.",
    tags: ["Next.js","typeScript","Tailwind css","Formik and yup","Api","next-intl"],
    imageUrl: ultra,
    hach:'https://ultra-solutions-six.vercel.app/en'
  },
  {
    title: "Serano-Place-Hotel",
    description:
      "Built a modern, responsive single-page hotel website using React, Tailwind CSS, and Framer Motion. The site showcases hotel rooms, services, gallery, and client testimonials with smooth animations and a user-friendly interface",
    tags: ["React.js", "framer motion", "Tailwind"],
    imageUrl: hotel,
    hach:"https://serano-place-hotel.vercel.app/"
  },
    {
    title: "Nike",
    description:
      "A front-end e-commerce project inspired by Nike’s website, built with HTML, CSS, Bootstrap, and JavaScript. Includes features like filtering, cart, and user login using a free fake API.",
    tags: [ "Html", "Css", "Bootstrap", "Javascript","Swiper Slider"],
    imageUrl: nike,
    hach:'https://nike-lyart-two.vercel.app/'
  },
  {
    title: "YoueTub clone",
    description:
      "Youtube clone its responsive website you can search for any video, movies, advertisements or channels   .",
    tags: ["React js", "Rapid Api", "Tailwind"],
    imageUrl: youTub,
    hach:"https://github.com/Mustafaradwan1/youtubClone"
  },
    {
    title: "WysiwygEditor",
    description:
      " coding test project assigned by a company as part of their job interview process, to build a WYSIWYG editor using only draft.js without additional libraries. Implemented key concepts of controlled and uncontrolled components in React.",
    tags: [ "Html", "Css", "Bootstrap", "Javascript","Swiper Slider"],
    imageUrl: WysiwygEditor,
    hach:'https://wysiwyg-editor-eta.vercel.app/'
  }
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

 

  
