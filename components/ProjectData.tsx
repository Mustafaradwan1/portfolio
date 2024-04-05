import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll,motion, useTransform } from 'framer-motion'
import {projectTs} from '@/dummy/Type'
import { useSectionInView } from "@/dummy/Hooks";
import Link from 'next/link';
const ProjectData = ({title,description,tags,imageUrl,hach}: projectTs) => {
    const refs = useRef(null)
    const {scrollYProgress} = useScroll({
      target:refs,
      offset : ["start end","end end"]
    })
    const scale = useTransform(scrollYProgress,[0,1],[.6, .95])
    const { ref } = useSectionInView("Projects",0.9);
    return <>
    <section
    ref={ref}
    >
    <motion.div className='group cursor-pointer'
            ref={refs}
            style={{
              scale,
              opacity:scrollYProgress,
             
            }}
    >
    <Link href={hach} target='_blank' className='projects rounded-md flex flex-col-reverse lg:flex-row  mb-5 last:mb-0  lg:h-[21rem] overflow-hidden bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition  relative group'>
        <div className="info h-full flex flex-col justify-between lg:py-5 lg:pl-5  p-5 lg:w-1/2 ">
          <div>
            <h2 className='text-xl mb-3 font-bold'>{title}</h2>
            <p className='dark:text-gray-400'>{description}</p>
          </div>
          <div className='flex flex-wrap gap-2 mt-5'>
            {tags.map((sp:string,ind:number)=>(
              <span key={ind} className='bg-gray-900 px-4 py-2 text-[11px] sm:text-sm  rounded-full mb-2 text-gray-50 hover:scale-105 cursor-pointer '>{sp}</span>
            ))}
          </div>
        </div>
        <Image className='lg:absolute h-[13rem] lg:w-[28rem] rounded-l-md lg:-right-32 md:h-[17rem] lg:bottom-0 group-hover:scale-105 lg:group-hover:-translate-x-3 lg:group-hover:translate-y-3 lg:group-hover:-rotate-2 transition
        ' src={imageUrl}  alt={title} quality={95} />
       
    </Link>
       </motion.div> 
    </section>
    </>
}

export default ProjectData



