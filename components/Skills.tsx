import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { skillsData } from '@/dummy/data'
import { useSectionInView } from "@/dummy/Hooks";
const Skills = () => {
  const SkillMap:string[] = skillsData
  const { ref } = useSectionInView("Skills",0.5);
  const animation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return <>
  <div ref={ref} className='mb-[8rem] scroll-mt-28'  id="skills">
     <Heading>Skills</Heading>
     <div>
      <ul
      className='flex flex-wrap gap-3 justify-center'>
      {SkillMap.map((ele,index)=>(
        <motion.li
        variants={animation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
        className='bg-gray-100 px-5 py-2 text-gray-900 rounded-lg  border border-black/5 cursor-pointer   dark:bg-gray-200 dark:hover:scale-110' key={index}
         >
          {ele}
        </motion.li>
      ))}
      </ul>
     </div>
  </div>
  </>
}

export default Skills