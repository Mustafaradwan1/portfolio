'use client'
import ME1 from '@/public/me.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { useSectionInView } from "@/dummy/Hooks";
import { useActiveSectionContext } from "@/Context/ContextProvider";

const Intro = () => {
  const { setOnClick, setActiveData } = useActiveSectionContext();
  const { ref } = useSectionInView("Home",0.5);
  return <>
    <div 
    ref={ref}
    className='w-full mb-[4rem] scroll-mt-28' id='home'>
        <div className=' w-full flex justify-center items-center'>
          <motion.div
            initial={{scale:0,opacity:0}}
            animate={{scale:1,opacity:1}}
            transition={{duration:0.3}}
            className=' relative'
            >
              <Image src={ME1} alt='' 
              priority={true} quality={100}  className='w-28 h-28 rounded-full
               shadow-2xl border-white border-4 object-cover ' />
              <motion.span
              initial={{scale:0,opacity:0}}
              animate={{scale:1,opacity:1}}
              transition={{duration:0.7,delay:0.3,type:"spring"}}
              className='absolute bottom-1 right-1 text-2xl'>
              👋
             </motion.span>
          </motion.div>
        </div>
        <motion.h1
          initial={{opacity:0,y:100}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7,type:"spring"}}
          className=' mt-10 text-lg sm:text-2xl capitalize sm:px-10 leading-10 text-center'>
            <span className='font-bold'>hello, i'm mustafa. </span> 
            i'm a  {" "}
            <span className='font-bold'> frontend developer .</span>  {" "}
             i enjoy building <span className='italic'>sites & apps</span> . my focus is {" "}
            <span className='underline'>react (next.js)</span>
        </motion.h1>
        <motion.div
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.3}}
         className='flex md:flex-row flex-col mt-5 gap-5 items-center justify-center'>
          <Link href='#contact'
          className='bg-gray-900 text-white 
          py-2 px-5 rounded-full flex items-center gap-2 group transition hover:scale-110'
          onClick={() => {
            setActiveData("Contact");
            setOnClick(Date.now());
          }}
          >contact me <FaLongArrowAltRight className='group-hover:translate-x-1' /></Link>
          <a href='/Cv.pdf' className='bg-white text-gray-900 
          py-2 px-5 rounded-full flex items-center gap-2 group transition hover:scale-110 hover:bg-gray-900 hover:text-gray-200' download={true}>download cv <FaDownload className='group-hover:translate-y-1 ' /></a>
          <div className='flex gap-3'>
          <a href='https://www.linkedin.com/in/mustafa-radwan-09b260271/' target='_blank' className='p-3  hover:scale-110 transition bg-white rounded-full dark:text-gray-950' ><FaLinkedin /></a>
          <a href='https://github.com/Mustafaradwan1?tab=repositories' target='_blank' className='p-3  hover:scale-110 transition bg-white rounded-full dark:text-gray-950' ><FaGithub  /></a>
          </div>
        </motion.div>
    </div>
  </>
}

export default Intro