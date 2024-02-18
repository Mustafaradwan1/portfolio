import React from 'react'
 import Heading from './Heading'
 import {motion} from 'framer-motion'
 import { useSectionInView } from "@/dummy/Hooks";

 
const About = () => {
  
  const { ref } = useSectionInView("About");
  return <>
  <div className='mb-[8rem] scroll-mt-32'
  id='about'>
    <motion.div
    ref={ref}
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:0.175}}
     className=' sm:px-10 sm:text-center'>
        <Heading>About me</Heading>
        <p className="mb-3 leading-8 text-[14px] sm:text-lg">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">frontEnd developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a frontEnd
        developer.
      </p>
    </motion.div>
  </div>
  </>
}

export default About