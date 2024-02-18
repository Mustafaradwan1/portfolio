/* eslint-disable react/jsx-key */
"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { links } from '@/dummy/data'
import Link from 'next/link'
import { useActiveSectionContext } from "@/Context/ContextProvider";
import { LinksTs } from '@/dummy/Type'
const Navbar = () => {
  const { ActiveData, setActiveData } = useActiveSectionContext();
  const LinkData:LinksTs = links
  return <div className='navbar top-0 sm:pt-4 z-[999] w-full  fixed '>
    <motion.div
    initial={{y:-100,opacity:0,x:"-50%"}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.3}}
    className=' bg-white dark:bg-gray-950 h-[5.5rem] w-full rounded-none sm:w-3/4 lg:w-1/2
     sm:h-[3.25rem]  sm:rounded-full left-1/2 -translate-x-1/2 dark:bg-opacity-70 relative shadow-lg
      shadow-black/[0.03]'>
        <ul
         className='flex flex-wrap justify-around items-center h-full'>
          {LinkData.map((link)=>(
            <li
            className='h-[50%] sm:h-[90%] flex items-center' onClick={()=>{setActiveData(link.name)}} key={link.hash}>
              <Link href={link.hash} className={`${ActiveData === link.name && 'text-gray-800 dark:text-gray-200 '}  relative z-20 px-3 py-1 hover:text-gray-800   text-gray-400 dark:hover:text-gray-200`}>{link.name}
              { link.name === ActiveData && (
              <span
                className='bg-gray-100 dark:bg-gray-800  absolute -z-10 w-full h-full  inset-0 rounded-full'
              ></span>
              )}
              </Link>
            </li>
          ))}
        </ul>
    </motion.div>
  </div>
}

export default Navbar