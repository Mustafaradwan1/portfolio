"use client";
import ExperienceData from './ExperienceData';
// import { Chrono } from "react-chrono";

import Heading from './Heading';
import {motion} from 'framer-motion'
import { useSectionInView } from "@/dummy/Hooks";
import { experiencesDataTs } from '@/dummy/Type';
import { experiencesData } from '@/dummy/data';
const Experience = () => {
  const { ref } = useSectionInView("Experience",0.5);
  const data:experiencesDataTs = experiencesData
  return <>

    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40 ">
      <Heading>My experience</Heading>
      <div

        style={{ width: '100%', height: 'auto' }}>
          <div className='experienceItem'>
              {data.map((ele,ind)=>(
              <ExperienceData key={ind}  {...ele} />
              ))}
          </div>
        </div>
         
    </section>
  
  </>
}

export default Experience