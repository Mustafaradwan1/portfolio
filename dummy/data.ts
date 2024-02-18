import React from 'react'
import nike from '@/public/nike.png'
import movie from '@/public/movie.png'
import youTub from '@/public/youtub.png'
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
    hach:'https://github.com/Mustafaradwan1/Nike'
  },
  {
    title: "Movies",
    description:
      "A movie project where you can search for your favorite movie or TV show and get enjoyable viewing.",
    tags: ["React js", "Slick Slider", "Tmdp Api", "Tailwind", "Loading"],
    imageUrl: movie,
    hach:"https://github.com/Mustafaradwan1/Movies"
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
      date: "1/6/2023",
      icon: React.createElement(AiOutlineMedium) 
    },
    {
      cardTitle: "Front-End Developer",
      location: "cairo,Egypt",
      description:
      "As a Junior Frontend Developer at  Elite Squad Solutions, I have had the opportunity to contribute to dynamic projects and enhance my skills in frontend development. Working closely with a talented team of developers, designers, and project managers",
      date: "1/7/2023",
      icon: React.createElement(AiOutlineSlack) 
  },
];

 

  
